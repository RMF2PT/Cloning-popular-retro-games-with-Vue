<template>
  <div class="center">
    <h1>{{ game?.name }}</h1>
    <!-- Button to open the component TetrisGame.vue -->
    <router-link :to="{ name: 'TetrisGame' }">
      <buttonCmp text="Play" class="play-game-button">Play</buttonCmp>
    </router-link>
    <img :src="game?.imageUrl" :alt="game?.name" />
    <p>{{ game?.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import buttonCmp from '@ui/ButtonCmp.vue'
import sourceData from '@games/games.json'

export default defineComponent({
  name: 'GameDetails',
  components: {
    buttonCmp
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    game() {
      return sourceData.games.find((game: any) => game.id === this.id)
    }
  }
})
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
