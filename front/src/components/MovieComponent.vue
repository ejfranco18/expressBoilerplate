<template>
  <div id="movieComponent">
    <div class="row d-flex justify-content-center">
      <h2>{{ movie.name }}</h2>
    </div>
    <div class="row">
      <div class="col-6 list-group-item">
        <h3>Summary:</h3>
        <p>{{ movie.description }}</p>
        <h3>Year:</h3>
        <p>{{ movie.year }}</p>
        <h3>Director:</h3>
        <p>{{ movie.director }}</p>
        <h3>Actors:</h3>
        <ul v-for="actor in movie.actors">
          <li>{{actor}}</li>
        </ul>
      </div>
      <div class="col-6">
        <img class="poster" v-bind:src="movie.poster" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'movieComponent',
    props: {
      movie: {
        required: true,
        type: Object
      }
    }
  }
</script>
