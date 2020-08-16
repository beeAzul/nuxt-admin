<template>
  <div class="container col-md-6 mt-5">
    <h2>Register</h2>
    <br>
    <form @submit.prevent="register">
      <div class="form-group">
        <label>Full name</label>
        <input v-model.trim="form.name" type="text" class="form-control"  placeholder="Enter Name" autofocus>
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control"  placeholder="Enter Email" autofocus>
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password" autofocus>
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
    <p>Already have an account ? <nuxt-link to="/login">Login</nuxt-link></p>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              form: {
                  name: '',
                  email: '',
                  password: ''
              }
          }
      },
      methods: {
          async register() {
              // Here we use the axios module imported in the nuxt.config.js file
              await this.$axios.$post('register', this.form);

              // After registering, we login the user
              await this.$auth.loginWith('local', {
                  data: {
                      email: this.form.email,
                      password: this.form.password
                  }
              });

              // redirect
              this.$router.push('/');

          }
      }
  }
</script>
