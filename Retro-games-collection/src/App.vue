<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main></main>
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
}

.wrapper {
  display: flex;
  place-items: center;
}
</style>
