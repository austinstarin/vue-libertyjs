<template>
  <button :class="classObject" @click="manageCommit">{{ buttonText }}</button>
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
      return `button ${(this.list ? 'is-danger' : 'is-primary')}`
    },
    buttonText () {
      return this.list ? 'Remove' : 'Add'
    }
  },
  methods: {
    manageCommit () {
      if (this.list === true) {
        return this.commitRemoveFromList()
      } else {
        return this.commitAddToList()
      }
    },
    commitAddToList () {
      return this.$store.dispatch('COMMIT_ADD_TO_LIST', {
        id: this.id,
        list: this.list
      })
    },
    commitRemoveFromList () {
      return this.$store.dispatch('COMMIT_REMOVE_FROM_LIST', {
        id: this.id,
        list: this.list
      })
    }
  }
}
</script>
