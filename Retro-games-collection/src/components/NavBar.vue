<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>

<template>
  <nav>
    <router-link to="/" id="title">Retro Games Collection</router-link>
    <span>
      <router-link to="/games">Games</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
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

  .app-active-link {
    font-weight: bold;
  }
}
</style>
