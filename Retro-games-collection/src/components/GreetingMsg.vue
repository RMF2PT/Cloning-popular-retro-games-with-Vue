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

<style scoped lang="scss">
p {
  color: rgb(255, 0, 0);

  &:hover {
    color: darken($color: rgb(255, 0, 0), $amount: 15%);
  }
}
</style>
