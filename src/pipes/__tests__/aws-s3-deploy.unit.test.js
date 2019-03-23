const awsS3Deploy = require('../aws-s3-deploy.js')

describe('pipes:aws-s3-deploy', () => {
  test('should pipe for slack notify', () => {
    const expected = {
      pipe: 'atlassian/aws-s3-deploy:0.2.2',
      variables: {
        AWS_ACCESS_KEY_ID: '$AWS_DEV_ACCESS_KEY_ID',
        AWS_SECRET_ACCESS_KEY: '$AWS_DEV_SECRET_ACCESS_KEY',
        AWS_DEFAULT_REGION: '$AWS_DEFAULT_REGION',
        S3_BUCKET: '$AWS_S3_BUCKET',
        LOCAL_PATH: 'dist/',
      },
    }

    expect(awsS3Deploy({
      awsAccessKeyId: '$AWS_DEV_ACCESS_KEY_ID',
      awsSecretAccessKey: '$AWS_DEV_SECRET_ACCESS_KEY',
      awsDefaultRegion: '$AWS_DEFAULT_REGION',
      s3Bucket: '$AWS_S3_BUCKET',
      localPath: 'dist/',
    })).toEqual(expected)
  })
})
