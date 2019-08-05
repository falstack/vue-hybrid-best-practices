const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: 'spa',

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409eff' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css'
  ],

  build: {
    publicPath: isDev ? '/_nuxt/' : '/vue-hybird-best-practices/'
  }
}
