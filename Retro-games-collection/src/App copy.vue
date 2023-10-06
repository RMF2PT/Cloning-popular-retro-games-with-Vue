<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  data() {}
})
</script>

<template>
  <nav-bar></nav-bar>
  <header></header>

  <main></main>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

header {
  display: flex;
  place-items: center;
  flex-flow: column;
}

.wrapper {
  display: block;
}
</style>
