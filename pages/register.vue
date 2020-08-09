<template>
  <div class="container col-md-6 mt-5">
    <h2>Register</h2>
    <br>
    <form>
      <div class="form-group">
        <label>Full name</label>
        <input type="email" class="form-control"  placeholder="Enter Name">
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control"  placeholder="Enter Email">
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password">
        <small class="form-text text-danger">Error display here.</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
    <p>Already had an account ? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>
