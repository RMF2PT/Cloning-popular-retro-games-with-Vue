<script lang="ts">
import { defineComponent } from 'vue'
import GreetingMsg from '@/components/GreetingMsg.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import UserCmp from './components/UserCmp.vue'

export default defineComponent({
  name: 'App',
  components: {
    GreetingMsg,
    HelloWorld,
    UserCmp
  },
  data() {
    return {
      age: 25
    }
  },
  methods: {
    updateAge(num: number): void {
      this.age += num
    }
  }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <hello-world msg="Hello Again" />
    </div>
    <p>This is first paragraph</p>
    <user-cmp :age="age" @age-change="updateAge"></user-cmp>
    <greeting-msg :age="age"></greeting-msg>
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
