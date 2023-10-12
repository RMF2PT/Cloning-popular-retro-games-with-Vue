<template>
  <div class="game-canvas center">
    <h1 id="game-title">Tic-Tac-Toe</h1>
    <div class="game-info">
      <div class="player-info">
        <div id="human-player" class="player">
          <div>Player</div>
          <div class="player-symbol" id="human-player-symbol">'X':</div>
          <div class="player-score" id="human-player-score">{{ humanScore }}</div>
        </div>
        <div id="computer-player" class="player">
          <div>Computer</div>
          <div class="player-symbol" id="computer-player-symbol">'O':</div>
          <div class="player-score" id="computer-player-score">{{ computerScore }}</div>
        </div>
      </div>
      <div class="buttons">
        <!-- Button to start game -->
        <buttonCmp id="start-button" text="Start" @click="startGame" v-if="isGameOver"></buttonCmp>
        <buttonCmp id="restart-button" text="End game" @click="stopGame" v-else></buttonCmp>
        <!-- Button to reset scores -->
        <buttonCmp id="reset-score-button" text="Reset scores" @click="resetGame"></buttonCmp>
      </div>
    </div>
    <!-- Create the game board -->
    <div id="game-board">
      <div class="game-cell" id="cell-1" @click="handleCellClick">{{ cell1 }}</div>
      <div class="game-cell" id="cell-2" @click="handleCellClick">{{ cell2 }}</div>
      <div class="game-cell" id="cell-3" @click="handleCellClick">{{ cell3 }}</div>
      <div class="game-cell" id="cell-4" @click="handleCellClick">{{ cell4 }}</div>
      <div class="game-cell" id="cell-5" @click="handleCellClick">{{ cell5 }}</div>
      <div class="game-cell" id="cell-6" @click="handleCellClick">{{ cell6 }}</div>
      <div class="game-cell" id="cell-7" @click="handleCellClick">{{ cell7 }}</div>
      <div class="game-cell" id="cell-8" @click="handleCellClick">{{ cell8 }}</div>
      <div class="game-cell" id="cell-9" @click="handleCellClick">{{ cell9 }}</div>
    </div>
    <div class="computer-playing-message" v-show="isComputerPlaying">
      The computer is thinking...
    </div>
    <div class="end-game-message" v-show="isEndGame">{{ endGameMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import buttonCmp from '@ui/ButtonCmp.vue'
import { reactive, ref } from 'vue'

let computerScore = ref(0)
let humanScore = ref(0)
let isGameOver = ref(true)
let grid: any[] = reactive([])
let cell1 = ref('')
let cell2 = ref('')
let cell3 = ref('')
let cell4 = ref('')
let cell5 = ref('')
let cell6 = ref('')
let cell7 = ref('')
let cell8 = ref('')
let cell9 = ref('')
// winning combinations
const winningCombinationsGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]
let isComputerPlaying = ref(false)
let endGameMessage = ref('')
let winner = ref('')

const startGame = () => {
  endGameMessage.value = ''
  winner.value = ''
  isGameOver.value = false
  grid = Array(9).fill('')
  updateCell()
}

const updateCell = () => {
  cell1.value = grid[0]
  cell2.value = grid[1]
  cell3.value = grid[2]
  cell4.value = grid[3]
  cell5.value = grid[4]
  cell6.value = grid[5]
  cell7.value = grid[6]
  cell8.value = grid[7]
  cell9.value = grid[8]
}

const checkWinner = () => {
  // check if there's a winner
  for (let i = 0; i < winningCombinationsGrid.length; i++) {
    if (
      grid[winningCombinationsGrid[i][0] - 1] === 'X' &&
      grid[winningCombinationsGrid[i][1] - 1] === 'X' &&
      grid[winningCombinationsGrid[i][2] - 1] === 'X'
    ) {
      winner.value = 'human'
      return true
    } else if (
      grid[winningCombinationsGrid[i][0] - 1] === 'O' &&
      grid[winningCombinationsGrid[i][1] - 1] === 'O' &&
      grid[winningCombinationsGrid[i][2] - 1] === 'O'
    ) {
      winner.value = 'computer'
      return true
    }
  }
  return false
}

const handleCellClick = (event: any) => {
  if (isGameOver.value || isComputerPlaying.value) return
  for (let i = 0; i < grid.length; i++) {
    if (`cell-${i + 1}` === `${event.target.id}`) {
      if (grid[i] !== '') return
      grid[i] = 'X'
      updateCell()
      if (checkWinner()) {
        showEndGameMessage()
        return
      }
      break
    }
  }
  computerTurn()
}

const computerTurn = () => {
  isComputerPlaying.value = true
  // check if is end game
  if (isEndGame()) {
    isComputerPlaying.value = false
    showEndGameMessage()
    return
  }
  setTimeout(() => {
    // choose a random cell
    let randomCell = Math.floor(Math.random() * 9)
    // if the cell is not empty, choose another one
    while (grid[randomCell] !== '') {
      randomCell = Math.floor(Math.random() * 9)
    }
    // set the cell to 'O'
    grid[randomCell] = 'O'
    updateCell()
    if (checkWinner()) {
      showEndGameMessage()
      return
    }
    isComputerPlaying.value = false
  }, 1000)
}

const isEndGame = () => {
  if (winner.value !== '') return true
  // check if there's any empty cell left
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === '') return false
  }
  // if there's no empty cell left, return true
  return true
}

const showEndGameMessage = () => {
  isGameOver.value = true
  isComputerPlaying.value = false
  if (isEndGame() && winner.value === 'computer') {
    endGameMessage.value = 'Game over and the winner is me'
    computerScore.value++
  } else if (isEndGame() && winner.value === 'human') {
    endGameMessage.value = 'Game over and the winner is you'
    humanScore.value++
  } else if (isEndGame() && winner.value === '') {
    endGameMessage.value = 'Game over and it is a tie'
  }
}

const stopGame = () => {
  isGameOver.value = true
  endGameMessage.value = ''
  winner.value = ''
  grid = Array(9).fill('')
  updateCell()
}

const resetGame = () => {
  stopGame()
  computerScore.value = 0
  humanScore.value = 0
}
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

.game-canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

#game-title {
  margin-bottom: 0.5rem;
}

.game-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.player-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.player {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.player-score,
.player-symbol {
  font-size: 1.5rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

#game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 300px;
  height: 300px;
  gap: 10px;
}

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
