import _ from 'lodash'

export default {
  cartCount: function (state) {
    const count = []
    _.each(state.movies, function (movie) {
      if (movie.cart === true) {
        count.push(movie)
      }
    })
    return count.length
  }
}
