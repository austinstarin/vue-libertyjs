<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <router-link :to="{ name: 'index' }">My Movie App</router-link>
        </div>
        <div class="navbar-item">
          <router-link :to="{ name: 'list' }">List {{ listCount }}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TheHeader',
  computed: {
    listCount () {
      return this.$store.getters.countList
    }
  }
}
</script>
