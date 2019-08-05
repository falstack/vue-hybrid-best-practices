const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: 'spa',

  router: {
    base: '/vue-hybird-best-practices/'
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css'
  ],

  build: {
    publicPath: isDev ? '/_nuxt/' : ''
  }
}

