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

#### 7 - Use the store to get data
'auth-module' store data into the vuex store. We can find a lot of information after a user logs in : 
<pre>
// data in store after a user logged in
    "auth": {
        "user": {
{
            "email":"shilouette@gmail.com",
            "name":"shilouette",
            "created_at":"2020-08-14T13:50:30.000000Z"
        },
        "loggedIn":true,
        "strategy":"local",
        "busy":false,
        "redirect":"__vue_devtool_undefined__"
    }
}
</pre>

#### 8 - Use Global Mixin to create plugin into the application  
Mixin is also used to provide a logic globaly to the app. In our case we use it to make a plugin which provide us authentication state from the sore.
<pre>
// See inside plugins/mixins folder
...
Vue.mixin({
 ...
});

// Everywhere in vue file, now we can use
&lt;template>
{{authenticated}} or {{user}}
&lt;/template>
</pre>

#### 9 - Handling errors.  
Errors will be stored in the store. To manage them, we create a store and a plugin named ErrorsHandler to catch axios errors. 
<pre>
// see store/validation.js file
</pre>

#### 10 Creation of middleware  
We create 2 middlewares:
 - Middleware to clear error when page switching
 - Middleware to protect page if user is not logged in
 
#### 11 CRUD
 - Creation of "Create topic" page;
 - Applying Middleware "auth";
see pages/dashboard
