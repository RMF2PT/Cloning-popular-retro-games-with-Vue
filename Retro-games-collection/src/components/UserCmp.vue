<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserCmp',
  props: {
    age: Number
  }
})
</script>

<template>
  <div>User is {{ age }} years old.</div>
</template>

<style scoped></style>
