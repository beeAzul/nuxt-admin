<template>
  <div class="container">
    <h2>Update Topic - {{$route.params.id}}</h2>
    <hr>
    <form @submit.prevent="update">
      <div class="form-group mt-5">
        <input type="text" class="form-control" v-model="topic.title">
        <small v-if="errors.title" class="form-text text-danger">errors.title[0]</small>
      </div>
      <button class="btn btn-outline-success">Update</button>
      <p class="mt-5 btn btn-outline-warning">
        <nuxt-link to="/topics">Back to topics</nuxt-link>
      </p>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: {
        title: ''
      }
    }
  },
  async asyncData({$axios, params}) {
      const {data} = await $axios.$get(`/topics/${params.id}`);

      return {
        topic: data
      }
  },
  methods: {
    async update() {
      await this.$axios.$patch(`/topics/${this.$route.params.id}`, {
        title: this.topic.title
      });
      this.$router.push('/topics')
    }
  }
}
</script>

<style scoped>

</style>
