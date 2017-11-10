import _ from 'lodash'

export default {
  ADD_TO_LIST (state, payload) {
    const id = { 'id': payload.id }
    const movie = _.find(state.movies, id)
    movie.list = true
    state.list.push(movie)
  },
  REMOVE_FROM_LIST (state, payload) {
    const id = { 'id': payload.id }
    const movie = _.find(state.list, id)
    movie.list = false
    state.list = _.without(state.list, movie)
  }
}
