<template>
  <button class="button is-primary" @click="commitToList">Add</button>
</template>

<script>
export default {
  name: 'Add',
  props: {
    text: String,
    id: String,
    list: Boolean
  },
  methods: {
    commitToList () {
      return this.$store.dispatch('COMMIT_TO_LIST', {
        id: this.id,
        list: this.list
      })
    }
  }
}
</script>
