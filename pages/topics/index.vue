<template>
  <div class="container">
    <h2>Latest Topics</h2>
    <hr>
    <div v-for="(topic, index) in topics" :key="index" class="bg-ligth mt-5 mb-5" style="padding: 5px">
      <div>
        <!--    topics-id refer to the structure of folder '/pages/topics/_id'    -->
        <h3><nuxt-link :to="{name: 'topics-id', params: {id: topic.id}}">{{topic.title}}</nuxt-link></h3>

        <div v-if="authenticated">
          <div v-if="user.id === topic.user.id">
            <nuxt-link :to="{name: 'topics-edit', params: {id: topic.id}}">
              <button class="btn btn-outline-success fa fa-edit fa-2x pull-right"></button>
            </nuxt-link>
            <button @click="deleteTopic(topic.id)" class="btn btn-outline-danger fa fa-trash fa-2x pull-right"></button>
          </div>
        </div>

        <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>
        <div v-for="(post, index) in topic.posts" :key="index" class="ml-5 content">
          {{post.body}}
          <p class="text-muted">{{post.created_at}} by {{post.user.name}}</p>
        </div>
      </div>
    </div>
  <nav>
    <ul class="pagination justify-content-center">
      <li v-for="(value, key) in links" class="page-item">
        <a @click="loadMore(value)" class="page-link">{{key}}</a>
      </li>
    </ul>
  </nav>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                topics: [],
                links: []
            }
        },
        // asyncData return data which are putted into the local state.
        async asyncData({$axios}) {
            // wa take $axios from the contect variable
            let {data, links, meta} = await $axios.$get('/topics');

            return {
                topics: data,
                links : links,
                meta : meta
            }
        },
        methods: {
            async loadMore(url) {
                let {data, links, meta} = await this.$axios.$get(url);
                console.log('_____sey_____');
                console.log(data,links, meta);
                console.log('_____sey_____');

                this.topics = {...this.topics, ...data }
                this.links = links;
                this.meta = meta;
            },
            async deleteTopic (id) {
                await this.$axios.$delete(`/topics/${id}`);
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
