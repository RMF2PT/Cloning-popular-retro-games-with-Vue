<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameCollection',
  data() {
    return {
      games: [
        {
          id: 1,
          name: 'Tetris',
          image: 'https://picsum.photos/200/200?grayscale'
        },
        {
          id: 2,
          name: 'Tic-Tac-Toe',
          image: 'https://picsum.photos/200/200?grayscale'
        },
        {
          id: 3,
          name: 'Rock, Paper, Scissors, Lizard, Spock',
          image: 'https://picsum.photos/200/200?grayscale'
        }
      ]
    }
  }
})
</script>

<template>
  <h1 class="center">Games Collection</h1>
  <!-- List the games in a card view -->
  <div class="card-container">
    <div class="card" v-for="game in games" :key="game.id">
      <!-- <router-link :to="{ name: 'GameDetails', params: { id: game.id } }"> -->
      <img :src="game.image" :alt="game.name" />
      <h2>{{ game.name }}</h2>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

h2 {
  // make text appear on top of image
  position: absolute;
  color: $color-text-light;
  font-size: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  // wrap text
  word-wrap: break-word;
  max-width: 200px;
  text-align: center;
}

@media (max-width: 768px) {
  .card-container {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .card {
    width: 150px;
    height: 150px;
  }

  h2 {
    width: 150px;
  }
}
</style>
