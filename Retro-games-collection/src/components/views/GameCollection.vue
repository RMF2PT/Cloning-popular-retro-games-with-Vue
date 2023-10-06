<script lang="ts">
import { defineComponent } from 'vue'
import GoBack from '@/components/GoBack.vue'

export default defineComponent({
  name: 'GameCollection',
  components: { GoBack }
})
</script>

<template>
  <go-back></go-back>
  <h1>Games Collection</h1>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
