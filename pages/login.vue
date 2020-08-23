<template>
  <div class="container col-md-6 mt-5">
    <h2>User Login</h2>
    <br>

    <div class="alert alert-danger" role="alert" v-if="message">
      {{message}}
    </div>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control"  placeholder="Enter Email" autofocus>
        <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password" autofocus>
        <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
    <p>Don't have an account ? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>

<script>
  export default {
      middleware: ['guest'],
      data() {
          return {
              form: {
                  email: '',
                  password: ''
              }
          }
      }, methods: {
          async submit() {
              // we can use $auth cause we installed the auth package. It refer to the module section in nuxt.config.js file
              // 'local' to use local strategies. See strategies in nuxt.config.js in the module section
              try {
                  await this.$auth.loginWith("local", {
                      data: this.form
                  });

                  // After login we push the user to the home page
                  this.$router.push({ path: "/dashboard" })
              } catch (e) {
                  console.log('_____login e_____');
                  console.log(e.response.data);
                  console.log('_____e_____');
              }
              // this.$router.push({ path: this.$route.path });
          }
      }
  }
</script>
