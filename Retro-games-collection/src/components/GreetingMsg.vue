<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GreetingMsg',
  props: {
    age: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      msg: 'Secret message'
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
  <p v-if="age >= 30">{{ greeting }}</p>
  <p v-else>You must be at least 30 years old to see the secret message</p>
</template>

<style scoped lang="scss">
p {
  text-align: center;
  color: rgb(255, 0, 0);

  &:hover {
    color: darken($color: rgb(255, 0, 0), $amount: 15%);
  }
}
</style>
