<script lang="ts">
import { defineComponent } from 'vue'
import GoBack from '@/components/GoBack.vue'

export default defineComponent({
  name: 'AboutCmp',
  components: {
    GoBack
  }
})
</script>

<template>
  <go-back></go-back>
  <p>About</p>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
