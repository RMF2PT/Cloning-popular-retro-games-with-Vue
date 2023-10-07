<script lang="ts">
import { defineComponent } from 'vue'
import GoBack from '@/components/GoBack.vue'

export default defineComponent({
  name: 'FooterCmp',
  components: {
    GoBack
  }
})
</script>

<template>
  <footer>
    <go-back></go-back>
    <span>
      <a href="https://twitter.com/RMF2PT/" target="_blank"> X </a>
      <a href="https://github.com/RMF2PT/" target="_blank"> Github </a>
      <a href="https://pt.linkedin.com/in/ricardomfferreira" target="_blank"> LinkedIn </a>
      <a href="https://rmf2pt.com" target="_blank">My special place</a>
    </span>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

footer {
  // TODO Make the footer sticky
  position: fixed;
  bottom: 0;
  left: 0;
  height: $footer-height;
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $color-background-footer;
  z-index: 2;

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

  span {
    display: flex;
    gap: 10px;
  }
}
</style>
