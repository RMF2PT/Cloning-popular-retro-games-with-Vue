<template>
  <buttonCmp @click="$router.back" text="Go back">Go back</buttonCmp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import buttonCmp from '@/components/ui/ButtonCmp.vue'

export default defineComponent({
  name: 'GoBack',
  components: {
    buttonCmp
  }
})
</script>
