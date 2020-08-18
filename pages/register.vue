<template>
  <div class="container col-md-6 mt-5">
    <h2>Register</h2>
    <br>
    <div class="alert alert-danger" role="alert" v-if="message">
      {{message}}
    </div>
    <form @submit.prevent="register">
      <div class="form-group">
        <label>Full name</label>
        <input v-model.trim="form.name" type="text" class="form-control"  placeholder="Enter Name" autofocus>
        <small v-if="errors.name" class="form-text text-danger">{{errors.name[0]}}</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control"  placeholder="Enter Email" autofocus>
        <small v-if="errors.email" class="form-text text-danger">{{errors.email[0]}}</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password" autofocus>
        <small v-if="errors.password" class="form-text text-danger">{{errors.password[0]}}</small>
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
              try {
                  // Here we use the axios module imported in the nuxt.config.js file
                  await this.$axios.$post('register', this.form);

                  // After registering, we login the user
                  await this.$auth.loginWith('local', {
                      data: {
                          email: this.form.email,
                          password: this.form.password
                      }
                  });
                  // After login we redirect to the homepage
                  this.$router.push({ path: "/" })
              } catch(e) {
                  console.log('_____register error_____');
                  console.log(e.response.data);
                  console.log('_____register error_____');
              }
              // this.$router.push({ path: this.$route.query.redirect })
          }
      }
  }
</script>
