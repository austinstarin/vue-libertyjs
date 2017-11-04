<template>
  <section class="section">
    <div class="columns">
      <Card
        v-for="movie in $store.state.movies"
        :key="movie.id"
        :title="movie.title"
        :thumbnail="movie.thumbnail"
      >
      </Card>
    </div>
  </section>
</template>

<script>
import Card from './Card'

export default {
  name: 'TheIndex',
  components: {
    Card
  }
}
</script>
