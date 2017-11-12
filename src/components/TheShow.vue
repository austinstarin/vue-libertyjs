<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <img :src="movie.thumbnail" :alt="movie.alternative" />
      </div>
      <div class="column is-three-quarters">
        <small :class="tagClassObject">{{ tagText }}</small>
        <h1 class="title is-1">{{ movie.title }}</h1>
        <h2 class="title is-5">{{ movie.director }}</h2>
        <p>{{ movie.synopsis }}</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'TheShow',
  computed: {
    tagClassObject () {
      return `tag ${(this.list ? `is-primary` : 'is-black')}`
    },
    tagText () {
      return this.list ? `In List` : `Not In List`
    },
    movie () {
      let id = this.$route.params.id
      return this.$store.state.movies.find((movie) => id)
    }
  }
}
</script>
