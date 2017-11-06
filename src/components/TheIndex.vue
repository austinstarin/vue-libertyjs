<template>
  <section class="section">
    <div class="columns is-multiline" >
      <Card
        v-for="movie in $store.state.movies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :director="movie.director"
        :thumbnail="movie.thumbnail"
        :list="movie.list"
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
