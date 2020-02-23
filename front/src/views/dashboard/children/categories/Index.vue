<template>
  <div id="categoriesIndex">
    <ul class="list-group">
      <li class="list-group-item mb-4" v-for="category in categories">
        <CategoryComponent :category='category'/>
            {{ category.description.substring(0,400) + '...' }}
      </li>
    </ul>
    <button type="button" class="btn btn-info">
      <router-link :to="{ name: 'new_category_path' }">Create New Category</router-link>
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CategoryComponent from '@/components/CategoryComponent'

  export default {
    name: 'categoriesIndex',
    components: { CategoryComponent },
    computed: mapState({
      categories: state => state.categories
    }),
    mounted() {
      this.$store.dispatch('fetchCategories')
    }
  }
</script>
