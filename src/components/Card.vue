<template>
  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-content">
        <Media
          :thumbnail="thumbnail"
          :alternative="title"
        ></Media>
        <TitleTertiary
          :title="title"
        ></TitleTertiary>
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
import Media from './Media'
import TitleTertiary from './TitleTertiary'

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
    Update,
    Media,
    TitleTertiary
  }
}
</script>
