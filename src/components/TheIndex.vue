<template>
  <div>
    <TheFeatured />
    <section class="section">
      <div class="columns is-multiline" >
        <MovieCard
          v-for="movie in $store.state.movies"
          :key="movie.id"
          :id="movie.id"
          :title="movie.title"
          :director="movie.director"
          :thumbnail="movie.thumbnail"
          :list="movie.list"
        >
        </MovieCard>
      </div>
    </section>
  </div>
</template>

<script>
import TheFeatured from '@/components/TheFeatured'
import MovieCard from './MovieCard'

export default {
  name: 'TheIndex',
  components: {
    TheFeatured,
    MovieCard
  }
}
</script>
