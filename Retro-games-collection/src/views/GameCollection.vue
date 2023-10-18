<template>
  <h1 class="center">Games Collection</h1>
  <!-- List the games in a card view -->
  <div class="card-container">
    <RouterLink
      v-for="{ id, name, slug, imageUrl } in games"
      :key="id"
      :to="{ name: 'Game Details', params: { id: id, slug: slug } }"
      class="card game-link"
    >
      <img :src="imageUrl" :alt="name" />
      <h2>{{ name }}</h2>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import sourceData from '@games/games.json'

const games = computed(() => sourceData.games)
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

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
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}

img {
  width: 100%;
  height: 100%;
  border-radius: $border-radius;
  object-fit: cover;
}

h2 {
  // make text appear on top of image
  position: absolute;
  color: $color-text-light;
  font-size: 1rem;
  text-shadow: $text-shadow;
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
