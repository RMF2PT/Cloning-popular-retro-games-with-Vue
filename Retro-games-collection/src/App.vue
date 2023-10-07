<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterCmp from './components/FooterCmp.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FooterCmp
  }
})
</script>

<template>
  <nav-bar></nav-bar>
  <div class="container">
    <router-view></router-view>
  </div>
  <footer-cmp></footer-cmp>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
