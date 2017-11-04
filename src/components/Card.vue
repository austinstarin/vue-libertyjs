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
        <footer class="card-footer">
          <p class="card-footer-item">
            <a href="">View Movie</a>
          </p>
          <p class="card-footer-item">
            <Add
              :id="id"
              :cart="cart"
            >
            </Add>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Add from './Add'
import Media from './Media'
import TitleTertiary from './TitleTertiary'

export default {
  name: 'Card',
  props: {
    id: String,
    title: String,
    thumbnail: String,
    cart: Boolean
  },
  components: {
    Add,
    Media,
    TitleTertiary
  }
}
</script>
