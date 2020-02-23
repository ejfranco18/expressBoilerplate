<template>
  <div id="categoriesNew">
    <form>
      <div class="d-flex flex-column align-items-center">
        <h3 class="">Add new category</h3>
          <div class="field">
            <div>Name</div>
            <div class="control">
              <input type="text" class="input" v-model="category.name" placeholder="Name of the category" autofocus required>
            </div>
          </div>
          <div class="field">
            <div>Description</div>
            <div class="control">
              <textarea cols="40" rows="6" v-model="category.description" placeholder="Description of the category" required></textarea>
            </div>
          </div>

      <button type="button" class="btn btn-info" v-on:click="newCategory">
          <span><font-awesome-icon icon="save"/> Save</span>
      </button>
      </div>
    </form>
  </div>

</template>

<script>
  export default {
    name: 'categoriesNew',
    data() {
      return {
        category: {}
      }
    },
    methods: {
      newCategory() {
        this.$store.dispatch('postCategory', this.category)
          .then(response => {
            this.$router.push({ name: 'category_path', params: { id: response.data.id }})
          })
      }
    }
  }
</script>

