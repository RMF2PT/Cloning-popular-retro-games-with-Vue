<script lang="ts">
import { defineComponent } from 'vue'
import GreetingMsg from '@/components/GreetingMsg.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    GreetingMsg,
    HelloWorld
  }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <greeting-msg></greeting-msg>
      <hello-world msg="Hello Again" />
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
