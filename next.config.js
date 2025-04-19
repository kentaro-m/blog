/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig
