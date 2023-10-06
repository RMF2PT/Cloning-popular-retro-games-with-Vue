<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GoBack'
})
</script>

<template>
  <span class="go-back">
    <button @click="$router.back">Go back</button>
  </span>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
