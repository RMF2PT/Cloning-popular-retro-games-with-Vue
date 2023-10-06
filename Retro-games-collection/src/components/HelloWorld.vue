<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  }
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h3>You’ve successfully created a project with Vue</h3>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
