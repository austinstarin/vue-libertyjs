<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view/>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
</style>
