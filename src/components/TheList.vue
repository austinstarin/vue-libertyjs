<template>
  <section class="section">
    <div class="container">
      <div v-if="movies.length > 0">
        <div v-for="movie in movies">
          <article class="columns media">
            <figure class="column is-one-fifth media-left">
              <img :src="movie.thumbnail" :alt="movie.alternative" />
            </figure>
            <div class="column is-half media-content">
              <h2 class="title is-5">{{ movie.title }}</h2>
              <p>{{ movie.synopsis }}</p>
              <StarRating :id="movie.id" :rating="movie.rating"></StarRating>
            </div>
            <div class="column media-right">
              <Update
                :id="movie.id"
                :list="movie.list"
              />
            </div>
          </article>
        </div>
      </div>
      <div v-else>
        <div class="notification is-info">
          <p>
            No movies in your list...
            <router-link :to="{ name: 'index' }">Add More</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from '@/components/StarRating'
import Update from '@/components/Update'

export default {
  name: 'TheList',
  components: {
    StarRating,
    Update
  },
  computed: {
    movies () {
      return this.$store.getters.listMovies
    }
  }
}
</script>
