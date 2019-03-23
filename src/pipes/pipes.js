const slackNotify = require('./slack-notify')
const awsS3Deploy = require('./aws-s3-deploy')

module.exports = {
  slackNotify,
  awsS3Deploy,
}
