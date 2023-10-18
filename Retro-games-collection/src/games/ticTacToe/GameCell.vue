<template>
  <div class="game-cell" :id="'cell-' + index" @click="handleCellClick">{{ value }}</div>
</template>

<script lang="ts">
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  emits: ['cell-click'],
  methods: {
    handleCellClick() {
      this.$emit('cell-click', this.index)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

.game-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-background;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  font-size: 3rem;
  cursor: pointer;

  &:hover {
    background: $color-background-hover;
  }

  &:active {
    background: $color-background-active;
  }

  &:disabled {
    background: $color-background-disabled;
    cursor: not-allowed;
  }
}
</style>
