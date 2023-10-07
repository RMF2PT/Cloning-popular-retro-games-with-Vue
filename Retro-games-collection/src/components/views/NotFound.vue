<script lang="ts">
import { defineComponent } from 'vue'
import GoBack from '@/components/GoBack.vue'

export default defineComponent({
  name: 'NotFound',
  components: {
    GoBack
  }
})
</script>

<template>
  <div class="center">
    <p class="center">404 - Page not found</p>
    <go-back></go-back>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

go-back {
  margin-bottom: 1rem;
}
</style>
