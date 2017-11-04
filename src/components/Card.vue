<template>
  <div class="column is-one-quarter-desktop">
    <div class="card">
      <div class="card-content">
        <Media
          :thumbnail="thumbnail"
          :alternative="alternative"
        ></Media>
        <TitleTertiary
          :title="title"
        ></TitleTertiary>
        <Add></Add>
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
    title: String,
    thumbnail: String
  },
  components: {
    Add,
    Media,
    TitleTertiary
  }
}
</script>
