<template>
  <div id="moviesShow">
    <MovieComponent :movie='movie'/>
    <button type="button" class="btn btn-info" v-on:click="deleteMovie">
      Delete Movie
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import MovieComponent from '@/components/MovieComponent'

  export default {
    name: 'moviesShow',
    components: { MovieComponent, MovieComponent },
    computed: mapState({
      movie: state => state.movie
    }),
    mounted() {
      this.$store.dispatch('getMovie', this.$route.params.id)
    },
    methods: {
      deleteMovie() {
        this.$store.dispatch('deleteMovie', this.$route.params.id)
          .then(response => {
            this.$router.push({ name: 'home_path' })
          })
      }
    }
  }
</script>
