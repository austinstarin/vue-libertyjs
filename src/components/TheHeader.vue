<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          My Movie App
        </a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a href="#">
              List {{ listCount }}
            </a>
          </div>
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
