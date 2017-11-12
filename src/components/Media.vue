<template>
  <img :src="thumbnail" :alt="alternative" />
</template>

<script>
export default {
  name: 'Media',
  props: {
    thumbnail: String,
    alternative: String
  }
}
</script>
