<script lang="ts">
import { defineComponent } from 'vue'
import GoBack from '@/components/GoBack.vue'

export default defineComponent({
  name: 'ContactCmp',
  components: { GoBack },
  data() {}
})
</script>

<template>
  <go-back></go-back>
  <p>Contact</p>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
