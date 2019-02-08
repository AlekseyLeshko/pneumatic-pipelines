const section = require('../section')

describe('section', () => {
  test('should return section for default', () => {
    const expected = { default: {} }

    expect(section.addDefault()()).toEqual(expected)
  })

  test('should return section for branches', () => {
    const expected = { branches: {} }

    expect(section.addBranches()()).toEqual(expected)
  })

  test('should return section for tags', () => {
    const expected = { tags: {} }

    expect(section.addTags()()).toEqual(expected)
  })

  test('should return section for custom', () => {
    const expected = { custom: {} }

    expect(section.addCustom()()).toEqual(expected)
  })

  test('should return section for pull-requests', () => {
    const expected = { 'pull-requests': {} }

    expect(section.addPullRequests()()).toEqual(expected)
  })

  test('should return section for bookmarks', () => {
    const expected = { bookmarks: {} }

    expect(section.addBookmarks()()).toEqual(expected)
  })
})
