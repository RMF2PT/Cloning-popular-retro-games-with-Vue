<template>
  <p>User is {{ age }} years old.</p>

  <button type="button" @click="onClickAge">Increase age by 3</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserCmp',
  props: {
    age: {
      type: Number,
      require: true,
      // default: 25,
      validator(value: number): boolean {
        return value < 130
      }
    }
  },
  emits: ['age-change'],
  methods: {
    onClickAge(): void {
      this.$emit('age-change', 3)
    }
  }
})
</script>
