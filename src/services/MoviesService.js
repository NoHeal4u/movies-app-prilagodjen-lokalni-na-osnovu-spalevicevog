import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:8000/api'
})

const ENDPOINTS = {
  MOVIES: '/movies'
}

export default {
  store: function(movie) {
    return axios.post(ENDPOINTS.MOVIES, movie)
  },
  index(term = '') {
    return axios.get(ENDPOINTS.MOVIES, {
      params: {
        term
      }
    })
  },
  remove (id) {
    return axios.delete(`MOVIES/${id}`)
  },

  edit (movie) {
    return axios.put(`MOVIES/${movie.id}`, movie)
  },

  get (id) {
    return axios.get(`MOVIES/${id}`)
  }
}