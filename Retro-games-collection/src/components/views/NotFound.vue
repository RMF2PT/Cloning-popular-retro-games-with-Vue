<script lang="ts">
import { defineComponent } from 'vue'
import GoBack from '@/components/GoBack.vue'

export default defineComponent({
  name: 'NotFound',
  components: { GoBack }
})
</script>

<template>
  <go-back></go-back>
  <p>404 - Not Found</p>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
