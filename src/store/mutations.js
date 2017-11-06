import _ from 'lodash'

export default {
  UPDATE_LIST (state, payload) {
    const id = { 'id': payload.id }
    if (payload.list) {
      const movie = _.find(state.list, id)
      movie.list = false
      state.list = _.without(state.list, movie)
    } else {
      const movie = _.find(state.movies, id)
      movie.list = true
      state.list.push(movie)
    }
  }
}
