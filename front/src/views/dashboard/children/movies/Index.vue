<template>
  <div id="moviesIndex">
    <div class="d-flex flex-wrap justify-content-around">
      <div class="card-movie" v-for="movie in movies">
        <img v-bind:src="movie.poster" />
        <div class="card-movie-infos">
          <h2>
            <router-link :to='{ name: "movie_path", params: { id: movie.id } }'>
              {{ movie.name }}
            </router-link>
          </h2>
          <p>{{ movie.year }}</p>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-info">
      <router-link :to="{ name: 'new_movie_path' }">Create New Movie</router-link>
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import MovieComponent from '@/components/MovieComponent'

  export default {
    name: 'moviesIndex',
    components: { MovieComponent },
    computed: mapState({
      movies: state => state.movies
    }),
    mounted() {
      this.$store.dispatch('fetchMovies')
    }
  }
</script>
