<template>
  <div class="container col-md-6 mt-5">
    <h2>User Login</h2>
    <br>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control"  placeholder="Enter Email" autofocus>
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password">
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
    <p>Don't have an account ? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              form: {
                  email: '',
                  password: ''
              }
          }
      }, methods: {
          async login() {
              // we can use $auth cause we installed the auth package. It refer to the module section in nuxt.config.js file
              // 'local' to use local strategies. See strategies in nuxt.config.js in the module section
              await this.$auth.loginWith("local", {
                  data: this.form,
              });

              // After login we push the user to the home page
              this.$router.push('/')
          }
      }
  }
</script>
