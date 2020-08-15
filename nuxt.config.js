
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    // Link css files to all pages
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // adding bootsrap and jquery CDN for styles
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ],
    // Link script to all pages
  script: [
    {
      src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
      type: "text/javascript"
    }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    './plugins/mixins/user.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: 'meta.token' /*It is schema of the returned response given by API*/ },
          user: { url: '/api/user', method: 'get', propertyName: 'data' /*Schema of user data given by API*/},
          logout: { url: '/api/logout', method: 'post' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
      // We can use other strategies like social login
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://nuxt-laravel-api.test"
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
