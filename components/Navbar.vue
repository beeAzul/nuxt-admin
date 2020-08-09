<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/">App</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Posts</nuxt-link>
          </li>
        </ul>

          <ul class="navbar-nav ml-auto">

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Register</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

  export default {}
</script>
