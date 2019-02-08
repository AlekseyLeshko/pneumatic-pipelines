const { pipe } = require('ramda')
const section = require('../section')

describe('section', () => {
  test('should return all sections', () => {
    expect(section.addDefault()()).toEqual({ default: {} })
    expect(section.addBranches()()).toEqual({ branches: {} })
    expect(section.addTags()()).toEqual({ tags: {} })
    expect(section.addCustom()()).toEqual({ custom: {} })
    expect(section.addPullRequests()()).toEqual({ 'pull-requests': {} })
    expect(section.addBookmarks()()).toEqual({ bookmarks: {} })
  })

  test('should build pipeline with sections', () => {
    const expected = {
      default: {},
      branches: {},
      tags: {},
      custom: {},
      'pull-requests': {},
      bookmarks: {},
    }

    const getPipeline = pipe(
      section.addDefault(),
      section.addBranches(),
      section.addTags(),
      section.addCustom(),
      section.addPullRequests(),
      section.addBookmarks(),
    )

    expect(getPipeline()).toEqual(expected)
  })

  test('should customize section', () => {
    const expected = {
      default: [{
        step: {},
      }],
    }

    const actual = section.addDefault([{
      step: {},
    }])()

    expect(actual).toEqual(expected)
  })

  test('should customize branches', () => {
    const expected = { branches: { master: [] } }

    const actual = section.addBranches({ master: [] })()

    expect(actual).toEqual(expected)
  })
})
