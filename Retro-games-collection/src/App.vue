<script lang="ts">
import { defineComponent } from 'vue'
import GreetingMsg from '@/components/GreetingMsg.vue'

export default defineComponent({
  name: 'App',
  components: {
    GreetingMsg
  }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <greetingMsg></greetingMsg>
    </div>
    <p>This is first paragraph</p>
  </header>

  <main></main>
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
  flex-flow: column;
}

.wrapper {
  display: block;
}
</style>
