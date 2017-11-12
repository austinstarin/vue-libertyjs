<template>
  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-content">
        <img :src="thumbnail" :alt="alternative" />
        <h3 class="title is-5">{{ title }}</h3>
        <p class="subtitle is-5">{{ director }}</p>
        <footer class="card-footer">
          <p class="card-footer-item">
            <a href="">View Movie</a>
          </p>
          <p class="card-footer-item">
            <Update
              :id="id"
              :list="list"
            >
          </Update>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Update from './Update'

export default {
  name: 'Card',
  props: {
    id: String,
    title: String,
    director: String,
    thumbnail: String,
    list: Boolean
  },
  components: {
    Update
  }
}
</script>
