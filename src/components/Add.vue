<template>
  <div>
  <button v-if="cart" class="button is-danger" @click="removeFromCart">Remove</button>
  <button v-if="!cart" class="button is-primary" @click="addToCart">Add</button>
</div>
</template>

<script>

export default {
  name: 'Add',
  props: {
    text: String,
    id: String,
    cart: Boolean
  },
  methods: {
    addToCart () {
      return this.$store.commit('ADD_MOVIE_CART', this.id)
    },
    removeFromCart () {
      return this.$store.commit('REMOVE_MOVIE_CART', this.id)
    }
  }
}
</script>
