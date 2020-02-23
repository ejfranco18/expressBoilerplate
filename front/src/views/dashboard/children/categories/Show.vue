<template>
  <div id="categoriesShow">
    <h2>{{category.name}}</h2>
    <p>{{category.description}}</p>
    <ul class="list-group">
      <li class="list-group-item d-flex flex-column justify-content-between" v-for="movie in category.movies" :key="movie.id">
        <router-link :to='{ name: "movie_path", params: { id: movie.id } }'>{{ movie.name }}</router-link>
        <p>{{ movie.description.substring(0,150) + '...' }}</p>
      </li>
    </ul>
    <button type="button" class="btn btn-info" v-on:click="deleteCategory">
      Delete Category
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CategoryComponent from '@/components/CategoryComponent'
  import MovieComponent from '@/components/MovieComponent'

  export default {
    name: 'categoriesShow',
    components: { CategoryComponent, MovieComponent },
    computed: mapState({
      category: state => state.category
    }),
    mounted() {
      this.$store.dispatch('getCategory', this.$route.params.id)
    },
    methods: {
      deleteCategory() {
        this.$store.dispatch('deleteCategory', this.$route.params.id)
          .then(response => {
            this.$router.push({ name: 'home_path' })
          })
      }
    }
  }
</script>
