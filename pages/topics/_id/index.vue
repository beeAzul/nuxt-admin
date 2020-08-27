<template>
  <div class="container">
    <div class="bg-ligth mt-5 mb-5" style="padding:20px;">
        <!-- topics-id refer to the structure of folder '/pages/topics/_id' -->
        <h2 class="display-3"><nuxt-link to="/topics">{{topic.title}}</nuxt-link></h2>
        <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>
        <div v-for="(post, index) in topic.posts" :key="index" class="ml-5 content">
          <p>{{post.body}}</p>
          <div v-if="authenticated">
            <div v-if="user.id === post.user.id">
              <nuxt-link :to="{name: 'topics-posts-edit', params: {post_id: post.id, topic_id: topic.id, topic_title: topic.title}}">
                <button class="btn btn-outline-success fa fa-edit pull-right"></button>
              </nuxt-link>
              <button @click="deletePost(post.id)" class="btn btn-outline-danger fa fa-trash pull-right"></button>
            </div>
          </div>
          <p class="text-muted">{{post.created_at}} by {{post.user.name}}</p>
        </div>
    </div>
    <div class="mt-5 ml-5 mb-5" v-if="authenticated">
      <form @submit.prevent="create">
        <div class="form-group">
        <h4>Add new post</h4>
        <textarea v-model="body" class="form-control" cols="30" rows="10"></textarea>
        <small class="form-text text-danger" v-if="errors.body">{{errors.body[0]}}</small>
        <button class="btn btn-outline-primary">Add new post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                topic: {},
                body: ''
            }
        },
        async asyncData({$axios, params}) {
            const {data} = await $axios.$get(`/topics/${params.id}`);
            return {
                topic: data
            }
        },
      methods: {
          async create(context) {
            console.log('_____this.topic.id_____');
            console.log(this.topic.id, context);
            console.log('_____this.topic.id_____');

            await this.$axios.$post(`/topics/${this.topic.id}/posts`, {body: this.body})
            this.$router.push('/topics')
          },
          async deletePost(id) {
            await this.$axios.$delete(`/topics/${this.topic.id}/posts/${id}`);
            this.$router.push('/topics')
          }
      }
    }
</script>

<style scoped>
.content {
  border-left: 10px solid white;
  padding: 0 10px 0 10px;
}
.btn-outline-success, .btn-outline-danger {
  border: none;
}
</style>
