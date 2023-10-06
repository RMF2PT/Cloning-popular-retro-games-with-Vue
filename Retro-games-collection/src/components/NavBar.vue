<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {},
  data() {},
  methods: {}
})
</script>

<template>
  <nav>
    <h1><a href="/">Retro Games Collection</a></h1>
    <span>
      <a href="#">Games</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </span>
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  a {
    color: var($color-text);
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    &:link,
    &:visited {
      color: inherit;
    }
    &:hover,
    &:active {
      color: darken($color: $color-text, $amount: 15%);
    }
  }

  span {
    display: flex;
    gap: 10px;
  }
}
</style>
