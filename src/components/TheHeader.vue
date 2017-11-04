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
            <a class="indicator-container" href="#">
              Cart
              <span v-show="count > 0" class="indicator">{{ count }}</span>
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
    count () {
      console.log(this.$store.getters.cartCount)
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style scoped>
.indicator-container {
  position: relative;
}
.indicator {
  position: absolute;
  top: 0;
  left: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  color: #fff;
  font-size: 0.7rem;
  background-color: #ff3860;
}
</style>
