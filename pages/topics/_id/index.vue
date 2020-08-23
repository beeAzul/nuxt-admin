<template>
  <div class="container">
    <div class="bg-ligth mt-5 mb-5" style="padding:20px;">
        <!-- topics-id refer to the structure of folder '/pages/topics/_id' -->
        <h2 class="display-3"><nunxt-link to="/topics">{{topic.title}}</nunxt-link></h2>
        <p class="text-muted">{{topic.creater_at}} by {{topic.user.name}}</p>
        <div v-for="(content, index) in topic.posts" :key="index" class="ml-5 content">
          {{content.body}}
          <p class="text-muted">{{content.created_at}} by {{content.user.name}}</p>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                topic: {}
            }
        },
        async asyncData({$axios, params}) {
            const {data} = await $axios.get(`/topics/${params.id}`);
            return {
                topic: data.data
            }
        }
    }
</script>

<style scoped>

</style>
