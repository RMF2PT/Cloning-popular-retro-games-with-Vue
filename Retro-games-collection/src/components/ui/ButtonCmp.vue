<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GoBack',
  props: {
    text: {
      type: String,
      default: 'Please provide text for button!!!'
    }
  }
})
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

button {
  cursor: pointer;
  font-family: inherit;
  width: 100px;
  padding: 5px;
  margin-bottom: 1rem;
  color: $color-text-light;
  background-color: $color-button;
  border: none;
  border-radius: 10px;
  box-shadow: $box-shadow;
  user-select: none;
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background: lighten($color-button, 5%);
  }

  &:active,
  &:focus {
    outline: none;
  }
}
</style>
