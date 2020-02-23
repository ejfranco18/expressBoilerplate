import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/api/v1"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    movies: [],
    category: {},
    movie: {},
    header: {},
    token: false
  },
  mutations: {
    setHeaders(state) {
      state.headers = {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    },

    setCategories(state, categories) {
      state.categories = categories
    },

    setCategory(state, category) {
      state.category = category
    },

    setMovies(state, movies) {
      state.movies = movies
    },

    setMovie(state, movie) {
      state.movie = movie
    }
  },
  actions: {
    fetchCategories({ commit, state }) {
      commit('setHeaders')
      axios.get('/categories', { headers: state.headers })
        .then(response => commit('setCategories', response.data))
        .catch(err => console.log(err.response))
    },

    getCategory({ commit, state }, id) {
      commit('setHeaders')
      axios.get(`/categories/${id}`, { headers: state.headers })
        .then(response => {
          commit('setCategory', response.data)
        })
        .catch(err => console.log(err.response))
    },

    postCategory({commit, state}, category) {
      commit('setHeaders')
      return new Promise((resolve, reject) => {
        axios.post('/categories', category, { headers: state.headers })
          .then(response => {
            commit('setCategory', response.data)
            resolve(response)
          })
          .catch(err => console.log(err.response))
      })
    },

    deleteCategory({ commit, state }, id) {
      commit('setHeaders')
      axios.delete(`/categories/${id}`, { headers: state.headers })
        .then(response => {
          commit('setCategory', response.data)
        })
        .catch(err => console.log(err.response))
    },

    fetchMovies({ commit, state }) {
      commit('setHeaders')
      axios.get('/movies', { headers: state.headers })
        .then(response => commit('setMovies', response.data))
        .catch(err => console.log(err.response))
    },

    getMovie({ commit, state }, id) {
      commit('setHeaders')
      axios.get(`/movies/${id}`, { headers: state.headers })
        .then(response => {
          commit('setMovie', response.data)
        })
        .catch(err => console.log(err.response))
    },

    postMovie({commit, state}, movie) {
      commit('setHeaders')
      return new Promise((resolve, reject) => {
        axios.post('/movies', movie, { headers: state.headers })
          .then(response => {
            commit('setMovie', response.data)
            resolve(response)
          })
          .catch(err => console.log(err.response))
      })
    },

    deleteMovie({ commit, state }, id) {
      commit('setHeaders')
      axios.delete(`/movies/${id}`, { headers: state.headers })
        .then(response => {
          commit('setMovie', response.data)
        })
        .catch(err => console.log(err.response))
    }
  },
  modules: {
  }
})
