import _ from 'lodash'

export default {
  ADD_MOVIE_CART (state, payload) {
    const movie = _.find(state.movies, { 'id': payload })
    movie.cart = true
  },
  REMOVE_MOVIE_CART (state, payload) {
    const match = { 'id': payload }
    const movie = _.find(state.movies, match)
    movie.cart = false
  }
}
