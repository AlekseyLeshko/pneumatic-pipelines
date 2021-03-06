const cleanUpObject = require('../helpers/clean-up-object')

module.exports = ({
  awsAccessKeyId,
  awsSecretAccessKey,
  awsDefaultRegion,
  s3Bucket,
  localPath,
  contentEncoding,
  acl,
  storageClass,
  cacheControl,
  expires,
  deleteFlag,
  extraArgs,
  debug,
}) => ({
  pipe: 'atlassian/aws-s3-deploy:0.3.2',
  variables: cleanUpObject({
    AWS_ACCESS_KEY_ID: awsAccessKeyId,
    AWS_SECRET_ACCESS_KEY: awsSecretAccessKey,
    AWS_DEFAULT_REGION: awsDefaultRegion,
    S3_BUCKET: s3Bucket,
    LOCAL_PATH: localPath,
    CONTENT_ENCODING: contentEncoding,
    ACL: acl,
    STORAGE_CLASS: storageClass,
    CACHE_CONTROL: cacheControl,
    EXPIRES: expires,
    DELETE_FLAG: deleteFlag,
    EXTRA_ARGS: extraArgs,
    DEBUG: debug,
  }),
})
