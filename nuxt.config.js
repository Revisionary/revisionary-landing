
export default {
  srcDir: 'src/',
  ssr: true,
  /*
  ** Headers of the page
  */
  head: {
    title: "Revisionary App",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

  },
  router: {
    prefetchLinks: true,
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.innerHeight, behavior: 'smooth'
        });
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ["~/assets/style/global"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/vue-tiny-slider.js",
      ssr: false
    },

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/global-components',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  styleResources: {
    scss: ['~/assets/style/config/variables.scss']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    loaders: {
      cssModules: {
        localIdentName: "[local]--[emoji]_[hash:base64:4]",
        modules: true,
        hashPrefix: "my-hash"
      }
    },
  },
  loading: {
    color: '#0363F3',
    height: '5px',
    throttle: '1000',
  },
}
