<template>
  <button :class="classObject" @click="manageCommit">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      loading: false
    }
  },
  props: {
    text: String,
    id: String,
    list: Boolean
  },
  computed: {
    classObject () {
      return `button ${(this.list ? 'is-danger' : 'is-primary')} ${(this.loading ? 'is-loading' : '')}`
    },
    buttonText () {
      return this.list ? 'Remove' : 'Add'
    }
  },
  methods: {
    manageCommit () {
      this.loading = true
      if (this.list === true) {
        return this.commitRemoveFromList()
          .then(() => {
            this.loading = false
          })
      } else {
        return this.commitAddToList()
          .then(() => {
            this.loading = false
          })
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
