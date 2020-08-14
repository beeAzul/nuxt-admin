####1 - Installation of NuxtJs
<pre>
$ npx create-nuxt-app project-name
# In the prompt select : 
Generating Nuxt.js project...
... // I skip some params
Use a custom server Framework <span style="color:red">none</span>
Use a custom UI Framework <span style="color:red">none</span>
Choose rendering mode <span style="color:red">Universal</span>
Use axios module <span style="color:red">yes</span>
Use eslint <span style="color:red">yes</span>
Use prettier <span style="color:red">yes</span>
...
</pre>

####2 - Start project in Dev env:
<pre>npm run dev</pre>
In browser, use url 'localhost:3000' to see the application

####3 - Adding Bootstrap CDN<br />
In nuxt.config.js :  
<pre>
 head: {
    ...,
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
  ...
  }
</pre>

####4 - Creation of Navbar component  
Add it to layouts/default.vue

####5 - Creation of Login and Register page in page folder

####6 - Installation of @nuxtjs/auth @nuxtjs/axios to handle authentication
Docs: https://auth.nuxtjs.org/guide/setup.html  
<pre>npm install @nuxtjs/auth @nuxtjs/axios</pre>

Edit nuxt.config.js and add:  
<pre>
modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth'
],

auth: {
  // Options for auth strategy
}
</pre>
Add axios base url in nuxt.config.js file:  
<pre>
  axios: {
    baseURL: "http://localhost:3000/api"
  },
</pre>

Configure the auth strategy in nuxt.config.js file:
Docs : https://auth.nuxtjs.org/schemes/local.html#usage

<pre>
...
auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
        logout: { url: '/api/auth/logout', method: 'post' },
        user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
      },
      // tokenRequired: true,
      // tokenType: 'bearer',
      // globalToken: true,
      // autoFetchUser: true
    }
  }
},
...
</pre>

/!\ <span style="color:red">When adding **auth-module** to a new Nuxt project ensure you have activated the Vuex store
**Activate Vuex** by simply adding a new file in **store** folder. In our case we created **index.js** file in **store** folder.</span>
