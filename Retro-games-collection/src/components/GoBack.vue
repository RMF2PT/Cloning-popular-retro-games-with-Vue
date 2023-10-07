<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GoBack'
})
</script>

<template>
  <span class="go-back">
    <button @click="$router.back">Go back</button>
  </span>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

button {
  cursor: pointer;
  font-family: inherit;
  width: 100px;
  padding: 5px;
  margin: 10px;
  color: #fff;
  background-color: #2196f3;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.5);
  user-select: none;

  &:hover {
    filter: brightness(110%);
  }

  &:active,
  &:focus {
    outline: none;
  }
}
</style>
