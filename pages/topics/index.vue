<template>
  <div class="container">
    <h2>Latest Topics</h2>
    <hr>
    <div v-for="(topic, index) in topics" :key="index" class="bg-ligth mt-5 mb-5">
      <div>
        <!--    topics-id refer to the structure of folder '/pages/topics/_id'    -->
        <h3><nuxt-link :to="{name: 'topics-id', params: {id: topic.id}}">{{topic.title}}</nuxt-link></h3>
        <p class="text-muted">{{topic.creater_at}} by {{topic.user.name}}</p>
        <div v-for="(content, index) in topic.posts" :key="index" class="ml-5 content">
          {{content.body}}
          <p class="text-muted">{{content.created_at}} by {{content.user.name}}</p>
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
                topics: []
            }
        },
        // asyncData return data which are putted into the local state.
        async asyncData({$axios}) {
            // wa take $axios from the contect variable
            let {data} = await $axios.get('/topics');

            return {
                topics: data.data,
                links : data.links
            }

        },
        methods: {
            async loadMore(url) {
                let {data} = await this.$axios.get(url);
                this.topics = data.data;
                this.links = data.links;
            }
        }
    }
</script>
