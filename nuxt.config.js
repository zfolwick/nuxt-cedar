const path = require('path');
const pkg = require('./package')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      srcdir: resolve('src'),
      cssdir: resolve('src/css'),
      assetsdir: resolve('src/assets'),
      componentsdir: resolve('./src/components'),
      compositionsdir: resolve('./src/compositions'),
      directivesdir: resolve('src/directives'),
      mixinsdir: resolve('src/mixins'),
      'cedar': resolve('./cedar.js'),
    },
    extensions: ['.js', '.vue', '.json'],
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
