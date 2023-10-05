<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h3>You’ve successfully created a project with Vue</h3>
  </div>
</template>

<style scoped>
.greetings {
  height: 100vh;
  width: 100vw;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
