<template>
  <div class="container col-md-6 mt-5">
    <h2>User Dasboard</h2>
    <hr>
    <form @submit.prevent="create">
      <div class="form-group">
        <label><strong>Topic title:</strong></label>
        <input v-model.trim="form.title" type="text" class="form-control"  placeholder="Enter Topic Title" autofocus>
        <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>Topic body:</strong></label>
        <textarea v-model.trim="form.body" type="text" class="form-control"></textarea>
        <small class="form-text text-danger" v-if="errors.body">{{errors.body[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
    <br>
  </div>
</template>

<script>
    export default {
        middleware: ['auth'], // we apply auth middleware which comes by default with nuxt module
        data() {
            return {
                form: {
                    title: '',
                    body: '',
                }
            }
        },
        methods: {
            async create() {
                try {
                    await this.$axios.$post('/topics', this.form);
                    this.$router.push('/');
                } catch (e) {
                    console.log('_____e_____');
                    console.log(e);
                    console.log('_____e_____');
                }
            }
        }
    }
</script>
