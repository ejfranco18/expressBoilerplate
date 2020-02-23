<template>
  <div id="moviesNew">
    <form>
      <div class="d-flex flex-column align-items-center">
        <h3 class="">Add new movie</h3>
          <div class="field">
            <div>Name</div>
            <div class="control">
              <input type="text" class="input" v-model="movie.name" placeholder="Name of the movie" autofocus required>
            </div>
          </div>
          <div class="field">
            <div>Description</div>
            <div class="control">
              <textarea cols="40" rows="6" v-model="movie.description" placeholder="Description of the movie" required></textarea>
            </div>
          </div>
          <div class="field">
            <div>Year</div>
            <div class="control">
              <input type="number" class="input" v-model="movie.year" placeholder="Year of the movie" required>
            </div>
          </div>
          <div class="field">
            <div>Director</div>
            <div class="control">
              <input type="text" class="input" v-model="movie.director" placeholder="Director of the movie" required>
            </div>
          </div>
          <div class="field">
            <div>Actors (Separate by comma)</div>
            <div class="control">
              <input type="text" class="input" v-model="movie.actors" placeholder="Actors of the movie" required>
            </div>
          </div>
          <div class="field">
            <div>Poster</div>
            <div class="control">
              <input type="text" class="input" v-model="movie.poster" placeholder="Poster of the movie" required>
            </div>
          </div>
          <div class="field">
            <div>Category</div>
            <div class="control">

              <select type="text" class="input" v-model="movie.category_id" placeholder="Category of the movie" required>
                <option v-bind:value="category.id"  v-for="category in categories">{{category.name}}</option>
              </select>
            </div>
          </div>
      <button type="button" class="btn btn-info" v-on:click="newMovie">
          <span><font-awesome-icon icon="save"/> Save</span>
      </button>
      </div>
    </form>
  </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'moviesNew',
    data() {
      return {
        movie: {}
      }
    },
    methods: {
      newMovie() {
        this.$store.dispatch('postMovie', this.movie)
          .then(response => {
            this.$router.push({ name: 'movie_path', params: { id: response.data.id }})
          })
      }
    },
    computed: mapState({
      categories: state => state.categories
    }),
    mounted() {
      this.$store.dispatch('fetchCategories')
    }
  }
</script>
