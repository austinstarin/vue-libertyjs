import _ from 'lodash'

export default {
  UPDATE_LIST (state, payload) {
    const movie = _.find(state.movies, { 'id': payload.id })
    if (payload.list) {
      movie.list = false
    } else {
      movie.list = true
      state.list.push(movie)
    }
  }
}
