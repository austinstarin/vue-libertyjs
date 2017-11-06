<template>
  <button :class="classObject" @click="commitToList">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'Add',
  props: {
    text: String,
    id: String,
    list: Boolean
  },
  computed: {
    classObject () {
      return `button ${(this.list ? `is-danger` : 'is-primary')}`
    },
    buttonText () {
      return this.list ? `Remove` : `Add`
    }
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
