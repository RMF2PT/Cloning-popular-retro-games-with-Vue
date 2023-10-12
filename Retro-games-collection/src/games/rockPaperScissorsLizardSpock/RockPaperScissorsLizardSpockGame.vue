<template>
  <div class="game-canvas center">
    <h1 class="game-title">Rock Paper Scissors Lizard Spock</h1>
    <div class="game-container">
      <!-- Player -->
      <div class="player-container" id="player">
        <h2>
          You - <span id="playerScore">{{ playerScoreNumber }}</span
          ><span class="choice" id="player-choice" v-show="playerChoice">{{
            ` -> ${playerChoice}`
          }}</span>
        </h2>
        <font-awesome-icon
          class="far-icon player-option"
          :class="playerChoice === 'rock' ? 'selected' : ''"
          icon="fa-regular fa-hand-back-fist"
          title="Rock"
          id="player-rock"
          @click="select('rock')"
        />
        <font-awesome-icon
          class="far-icon player-option"
          :class="playerChoice === 'paper' ? 'selected' : ''"
          icon="fa-regular fa-hand"
          title="Paper"
          id="player-paper"
          @click="select('paper')"
        />
        <font-awesome-icon
          class="far-icon player-option"
          :class="playerChoice === 'scissors' ? 'selected' : ''"
          icon="fa-regular fa-hand-scissors"
          title="Scissors"
          id="player-scissors"
          @click="select('scissors')"
        />
        <font-awesome-icon
          class="far-icon player-option"
          :class="playerChoice === 'lizard' ? 'selected' : ''"
          icon="fa-regular fa-hand-lizard"
          title="Lizard"
          id="player-lizard"
          @click="select('lizard')"
        />
        <font-awesome-icon
          class="far-icon player-option"
          :class="playerChoice === 'spock' ? 'selected' : ''"
          icon="fa-regular fa-hand-spock"
          title="Spock"
          id="player-spock"
          @click="select('spock')"
        />
      </div>
      <!-- Computer -->
      <div class="player-container" id="computer">
        <h2>
          Computer - <span id="computerScore">{{ computerScoreNumber }}</span
          ><span class="choice" id="computer-choice" v-show="computerChoice">{{
            ` -> ${computerChoice}`
          }}</span>
        </h2>
        <font-awesome-icon
          class="far-icon"
          :class="computerChoice === 'rock' ? 'selected' : ''"
          icon="fa-regular fa-hand-back-fist"
          title="Rock"
          id="computer-rock"
        />
        <font-awesome-icon
          class="far-icon"
          :class="computerChoice === 'paper' ? 'selected' : ''"
          icon="fa-regular fa-hand"
          title="Paper"
          id="computer-paper"
        />

        <font-awesome-icon
          class="far-icon"
          :class="computerChoice === 'scissors' ? 'selected' : ''"
          icon="fa-regular fa-hand-scissors"
          title="Scissors"
          id="computer-scissors"
        />
        <font-awesome-icon
          class="far-icon"
          :class="computerChoice === 'lizard' ? 'selected' : ''"
          icon="fa-regular fa-hand-lizard"
          title="Lizard"
          id="computer-lizard"
        />
        <font-awesome-icon
          class="far-icon"
          :class="computerChoice === 'spock' ? 'selected' : ''"
          icon="fa-regular fa-hand-spock"
          title="Spock"
          id="computer-spock"
        />
      </div>
      <!-- Reset -->
      <font-awesome-icon
        class="reset-icon"
        icon="fa-solid fa-arrows-rotate reset-icon"
        title="Reset"
        @click="resetAll()"
      />
      <!-- Results -->
      <div class="result-container">
        <h3 class="result-text">{{ resultText }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const choices: { [key: string]: { name: string; defeats: string[] } } = {
  rock: {
    name: 'Rock',
    defeats: ['scissors', 'lizard']
  },
  paper: {
    name: 'Paper',
    defeats: ['rock', 'spock']
  },
  scissors: {
    name: 'Scissors',
    defeats: ['paper', 'lizard']
  },
  lizard: {
    name: 'Lizard',
    defeats: ['paper', 'spock']
  },
  spock: {
    name: 'Spock',
    defeats: ['rock', 'scissors']
  }
}

let playerScoreNumber = ref(0)
let computerScoreNumber = ref(0)
let computerChoice = ref('')
let playerChoice = ref('')
let resultText = ref('')

const resetSelected = () => {
  const icons = document.querySelectorAll('.far-icon')
  icons.forEach((icon) => icon.classList.remove('selected'))
}

const resetAll = () => {
  playerScoreNumber.value = 0
  computerScoreNumber.value = 0
  playerChoice.value = ''
  computerChoice.value = ''
  resultText.value = ''
  resetSelected()
}

const computerRandomChoice = () => {
  const computerChoiceNumber = Math.floor(Math.random() * 5 + 1)
  if (computerChoiceNumber === 1) {
    computerChoice.value = 'rock'
  } else if (computerChoiceNumber === 2) {
    computerChoice.value = 'paper'
  } else if (computerChoiceNumber === 3) {
    computerChoice.value = 'scissors'
  } else if (computerChoiceNumber === 4) {
    computerChoice.value = 'lizard'
  } else {
    computerChoice.value = 'spock'
  }
}

const updateScore = () => {
  if (playerChoice.value === computerChoice.value) {
    resultText.value = "It's a tie."
  } else {
    const choice = choices[playerChoice.value]
    console.log(choice)
    if (choice.defeats.includes(computerChoice.value)) {
      resultText.value = 'You won!'
      playerScoreNumber.value++
      // startConfettiInner()
    } else {
      resultText.value = 'You lost!'
      computerScoreNumber.value++
    }
  }
}

// Call functions to process turn
function checkResult() {
  computerRandomChoice()
  updateScore()
}

// Passing player selection and styling icons
function select(choice: string) {
  playerChoice.value = choice
  checkResult()
}
</script>

<style scoped lang="scss">
@import '@assets/_variables.scss';

h1 {
  margin-bottom: 0.5rem;
}

.game-container {
  width: 530px;
  height: 500px;
  background: $color-background;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

.player-container {
  margin: 50px;
}

h2 {
  margin-bottom: 20px;
}

.far-icon {
  font-size: 50px;
  margin-right: 40px;
  user-select: none;
}

#player .far-icon,
#player .choice {
  color: $color-primary-2;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
}

#computer .far-icon,
#computer .choice {
  color: $color-secondary-1-2;
  &:last-of-type {
    margin-right: 0;
  }
}

#player .selected {
  color: $color-primary-4;
}

#computer .selected {
  color: $color-secondary-1-4;
}

.reset-icon {
  font-size: 30px;
  cursor: pointer;
}

.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.result-text {
  font-size: 40px;
  margin: unset;
  margin-top: 20px;
}
</style>
