<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'HomeCmp',
  components: {
    RouterLink
  }
})
</script>

<template>
  <section class="center">
    <h1>Welcome to my personal project</h1>
    <p>This is my playground for cloning classic retro games and training my developer skills</p>
    <p>Check out all the games available <router-link to="/games">here</router-link></p>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

a {
  color: $color-link;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
