<template>
  <div class="center">
    <h1>{{ game?.name }}</h1>
    <!-- Button to open the component TetrisGame.vue -->
    <RouterLink :to="{ name: game?.name }">
      <ButtonCmp text="Play" class="play-game-button" />
    </RouterLink>
    <img :src="game?.imageUrl" :alt="game?.name" />
    <p>{{ game?.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ButtonCmp from '@ui/ButtonCmp.vue'
import sourceData from '@games/games.json'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const game = computed(() => sourceData.games.find((game: any) => game.id === props.id))
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

img {
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

p {
  text-align: left;
}
</style>
