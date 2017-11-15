<template>
  <button :class="classObject" @click="manageCommit">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'Update',
  data () {
    return {
      loading: false
    }
  },
  props: {
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
      if (this.list) {
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
        id: this.id
      })
    },
    commitRemoveFromList () {
      return this.$store.dispatch('COMMIT_REMOVE_FROM_LIST', {
        id: this.id
      })
    }
  }
}
</script>
