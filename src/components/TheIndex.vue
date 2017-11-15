<template>
  <div>
    <TheFeatured />
    <section class="section">
      <div class="container">
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
      </div>
    </section>
  </div>
</template>

<script>
import TheFeatured from '@/components/TheFeatured'
import MovieCard from '@/components/MovieCard'

export default {
  name: 'TheIndex',
  components: {
    TheFeatured,
    MovieCard
  },
  computed: {
    movies () {
      return this.$store.getters.movies
    }
  }
}
</script>
