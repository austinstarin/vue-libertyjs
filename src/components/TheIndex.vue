<template>
  <section class="section">
    <div class="columns is-multiline" >
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :director="movie.director"
        :thumbnail="movie.thumbnail"
        :list="movie.list"
        :rating="movie.rating"
      >
      </MovieCard>
    </div>
  </section>
</template>

<script>
import MovieCard from './MovieCard'

export default {
  name: 'TheIndex',
  components: {
    MovieCard
  },
  computed: {
    movies () {
      return this.$store.state.movies
    }
  }
}
</script>
