export default {
  countList: function (state) {
    return state.list.length
  },
  featuredMovie: function (state) {
    return state.movies.find((movie) => movie.featured === true)
  },
  movies: function (state) {
    return state.movies
  }
}
