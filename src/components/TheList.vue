<template>
  <div>
    <div v-for="movie in movies">
      {{ movie.title }}
      <Update
        :id="movie.id"
        :list="movie.list"
      />
    </div>
  </div>
</template>

<script>
import Update from '@/components/Update'

export default {
  name: 'TheList',
  components: {
    Update
  },
  computed: {
    movies () {
      return this.$store.getters.listMovies
    }
  }
}
</script>
