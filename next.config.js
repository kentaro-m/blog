module.exports = {
  /**
   * NOTE: disable this setting to avoid to conflict with file-loader
   * @see https://stackoverflow.com/questions/68008498/nextjs-typeerror-unsupported-file-type-undefined-after-update-to-v-11
   */
  images: {
    disableStaticImages: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    })
    config.module.rules.push({
      test: /\.(md|markdown)$/,
      type: 'asset/source',
    })
    return config
  }
}
