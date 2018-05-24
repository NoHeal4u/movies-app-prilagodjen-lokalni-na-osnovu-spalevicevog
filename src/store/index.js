import Vue from 'vue'
import Vuex from 'vuex'

import MoviesService from './../services/MoviesService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 100,
    searchTerm: '',
    movies: []
  },
  getters: {
    getCounter(state) {
      return state.counter
    },
    getSearchTerm(state) {
      return state.searchTerm
    },
    getMovies(state) {
      return state.movies
    }
  },
  mutations: {
    incrementCounter(state) {
      state.counter++
    },
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm
    },
    setMovies(state, movies) {
      state.movies = movies
    }
  },
  actions: {
    incrementCounterAction(store) {
      setTimeout(() => {
        store.commit('incrementCounter')
      }, 3000)
    },
    fetchMovies(store) {
      MoviesService.index().then(({ data }) => {
        let movies = data.map((movie) => {
          movie.duration = Number(movie.duration)
          return movie
        })
        store.commit('setMovies', movies)
      })
    }
  }
})
