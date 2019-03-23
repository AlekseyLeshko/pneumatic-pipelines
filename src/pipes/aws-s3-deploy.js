module.exports = ({
  awsAccessKeyId,
  awsSecretAccessKey,
  awsDefaultRegion,
  s3Bucket,
  localPath,
}) => ({
  pipe: 'atlassian/aws-s3-deploy:0.2.2',
  variables: {
    AWS_ACCESS_KEY_ID: awsAccessKeyId,
    AWS_SECRET_ACCESS_KEY: awsSecretAccessKey,
    AWS_DEFAULT_REGION: awsDefaultRegion,
    S3_BUCKET: s3Bucket,
    LOCAL_PATH: localPath,
  },
})
