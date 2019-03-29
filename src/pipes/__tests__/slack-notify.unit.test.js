const slackNotify = require('../slack-notify.js')

describe('pipes:slack-notify', () => {
  test('should pipe for slack notify', () => {
    const expected = {
      pipe: 'atlassian/slack-notify:0.2.3',
      variables: {
        WEBHOOK_URL: 'test-webhook',
        MESSAGE: 'test-message',
        DEBUG: 'false',
      },
    }

    expect(slackNotify({
      webhook: 'test-webhook',
      message: 'test-message',
    })).toEqual(expected)
  })

  test('should pipe for slack notify with debug', () => {
    const expected = {
      pipe: 'atlassian/slack-notify:0.2.3',
      variables: {
        WEBHOOK_URL: 'test-webhook',
        MESSAGE: 'test-message',
        DEBUG: 'true',
      },
    }

    expect(slackNotify({
      webhook: 'test-webhook',
      message: 'test-message',
      debug: true,
    })).toEqual(expected)
  })
})
