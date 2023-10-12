<template>
  <div class="game-canvas center">
    <h1 class="game-title">Tetris</h1>
    <div id="game-info">
      <div id="highscore-display">High Score: <span id="highscore">0</span></div>
      <div id="score-display">Score: <span id="score">0</span></div>
      <div id="level-display">Level: <span id="level">1</span></div>
      <buttonCmp id="start-button" text="Start" @click="startGame">Start</buttonCmp>
    </div>
    <div id="game-container"></div>
    <div id="next-piece-label">Next Piece</div>
    <div id="next-piece-container"></div>
    <div class="message-container" id="message-container" v-show="isGameOver">
      <span>Game Over!</span>
      <font-awesome-icon icon="fa-solid fa-dice" />
      <buttonCmp id="retry-button" text="Retry">Retry</buttonCmp>
    </div>
    <audio id="background-music" loop>
      <source src="@assets/audio/Tetris.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <audio id="game-over-music">
      <source src="@assets/audio/game-over.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<!-- <script setup lang="ts">
import buttonCmp from '@ui/ButtonCmp.vue'
import { mapStores, mapActions } from 'pinia'
import useTetrisStore from '@stores/tetris'

</script> -->

<script lang="ts">
import { defineComponent } from 'vue'
import buttonCmp from '@ui/ButtonCmp.vue'
import { mapStores, mapActions } from 'pinia'
import useTetrisStore from '@stores/tetris'

export default defineComponent({
  name: 'TetrisGame',
  components: {
    buttonCmp
  },
  data() {
    return {
      isGameOver: this.isGameOver
    }
  },
  computed: {
    ...mapStores('useTetrisStore')
  },
  methods: {
    ...mapActions(useTetrisStore, ['setIsGameOver']),
    // method to start the game
    startGame() {
      // set the isgameover to false
      this.setIsGameOver(false)
    },
    // write a method to start the tetris music
    startMusic() {
      const music = document.getElementById('background-music') as HTMLAudioElement
      music.play()
    }
  }
})
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

h1 {
  margin-bottom: 0.5rem;
}

#game-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: $color-text;
}

#game-container {
  width: 300px;
  height: 600px;
  background: $color-background;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

#next-piece-label {
  position: fixed;
  top: 15%;
  left: 75%;
  width: 150px;
  height: 150px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

#next-piece-container {
  position: fixed;
  top: 25%;
  left: 75%;
  width: 150px;
  height: 150px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message-container {
  position: absolute;
  width: 90%;
  max-width: 600px;
  height: 200px;
  background: azure;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  color: $color-secondary-1-3;

  & span {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  & button {
    margin-top: 10px;
  }
}
</style>
