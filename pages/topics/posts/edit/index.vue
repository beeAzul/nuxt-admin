<template>
  <div class="container">
    <h2>Edit post</h2>
    <form @submit.prevent="update(post.id)">
      <div class="form-group mt-5">
        <textarea v-model="post.body" class="form-control" rows="10"></textarea>
        <small v-if="errors.body" class="form-text text-danger">errors.body[0]</small>
      </div>
      <button class="btn btn-outline-success">Update</button>
      <button class="btn btn-outline-warning">
        <nuxt-link :to="`/topics/${this.$route.params.topic_id}`">Back to topics {{this.$route.params.topic_title}}</nuxt-link>
      </button>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        body: ''
      }
    }
  },
  async asyncData({$axios, params}) {
    let {data} = await $axios.$get(`/topics/${params.topic_id}/posts/${params.post_id}`);

    return {
      post: data
    }
  },
  methods: {
    async update(id) {
      this.$axios.$patch(`/topics/${this.$route.params.topic_id}/posts/${id}`, {body: this.post.body});
      this.$router.push(`/topics/${this.$route.params.topic_id}`)
    }
  }
}
</script>

<style scoped>

</style>
