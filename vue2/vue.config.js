/**
 * These are some necessary steps changing the default webpack config of the Vue CLI
 * that need to be changed in order for TypeScript based components to generate their
 * declaration (.d.ts) files.
 * Discussed here https://github.com/vuejs/vue-cli/issues/1081
 */
function fixEmitDeclarationFilesForTypeScript(config) {
  if (process.env.NODE_ENV === 'production') {
    config.module.rule('ts').uses.delete('cache-loader')
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => ({
        ...options,
        transpileOnly: false,
        happyPackMode: false
      }))
  }
  // parallel: false
}

module.exports = {
  chainWebpack: config => {
    fixEmitDeclarationFilesForTypeScript(config)
    if (process.env.NODE_ENV === 'production') {
      config.externals({
        ...config.get('externals'),
        'oidc-client': 'oidc-client'
      })
    }
  },
  parallel: process.env.NODE_ENV !== 'production',
  devServer: {
    https: true,
    proxy: {
      '/cas': {
        logLevel: 'debug',
        target: 'https://cas.example.org:8443',
        ws: true,
        changeOrigin: true
      }
    }
  }
}

