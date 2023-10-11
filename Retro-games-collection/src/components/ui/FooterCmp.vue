<template>
  <footer>
    <span>
      <a href="https://twitter.com/RMF2PT/" target="_blank"> X </a>
      <a href="https://github.com/RMF2PT/" target="_blank"> Github </a>
      <a href="https://pt.linkedin.com/in/ricardomfferreira" target="_blank"> LinkedIn </a>
      <a href="https://rmf2pt.com" target="_blank">My special place</a>
    </span>
  </footer>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterCmp'
})
</script> -->

<style scoped lang="scss">
@import '@assets/_variables.scss';

footer {
  height: $footer-height;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 10px;
  background: $color-background-footer;
  z-index: 2;

  span {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a {
    padding: 0 10px;
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
}
</style>
