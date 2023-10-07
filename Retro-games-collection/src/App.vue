<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import GoBack from '@/components/GoBack.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    GoBack
  }
})
</script>

<template>
  <nav-bar></nav-bar>
  <go-back></go-back>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
