module.exports = ({ webhook, message, debug = false }) => ({
  pipe: 'atlassian/slack-notify:0.2.3',
  variables: {
    WEBHOOK_URL: webhook,
    MESSAGE: message,
    DEBUG: debug.toString(),
  },
})
