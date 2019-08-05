module.exports = {
  mode: 'spa',

  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
      },
      {
        name: 'format-detection',
        content: 'telephone=no,email=no,address=no'
      },
      {
        name: 'applicable-device',
        content: 'mobile'
      },
      { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { name: 'force-rendering', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
    ],
  },

  router: {
    base: '/vue-hybird-best-practices/'
  },

  plugins: [
    '~plugins/import.js'
  ]
}
