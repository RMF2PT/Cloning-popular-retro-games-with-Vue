<template>
  <nav>
    <RouterLink to="/" id="title">
      <FontAwesomeIcon icon="fa-solid fa-dice" />
      Classic Games Collection
    </RouterLink>
    <span>
      <RouterLink to="/games" text="Games" />
      <RouterLink to="/about" text="About" />
    </span>
  </nav>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

nav {
  overflow: hidden;
  position: fixed;
  top: 0;
  height: $navbar-height;
  width: 100vw;
  padding: 10px;
  background: $color-background-nav;
  z-index: 2;

  span {
    float: right;
    display: flex;
    gap: 10px;
  }

  a {
    color: $color-text;
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

  .app-active-link {
    font-weight: bold;
  }
}
</style>
