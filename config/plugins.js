module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AKIAXDKPLFIG4JKKMJGX'),
          secretAccessKey: env('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'),
          region: env('ap-east-1'),
          params: {
              Bucket: env('fmibucket'),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
  });