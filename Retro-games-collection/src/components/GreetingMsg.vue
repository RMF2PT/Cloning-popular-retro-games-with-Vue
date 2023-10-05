<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GreetingMsg',
  data() {
    return {
      msg: 'Hello World'
    }
  },
  computed: {
    greeting(): string {
      return this.msg + '!'
    }
  }
})
</script>

<template>
  <p>{{ greeting }}</p>
</template>

<style scoped>
p {
  color: rgb(255, 0, 0);
}
</style>
