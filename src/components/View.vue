<template>
  <div>
    <div v-for="movie in $store.state.movies">
      {{ movie.name }}
      <Add
      :name="movie.name"
      />
    </div>
  </div>
</template>

<script>
import Add from '@/components/Add'

export default {
  name: 'View',
  components: {
    Add
  }
}
</script>
