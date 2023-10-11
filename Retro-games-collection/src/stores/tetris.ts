import { defineStore } from 'pinia'

const useTetrisStore = defineStore({
  id: 'tetris',
  state: () => ({
    isGameOver: true
  }),
  actions: {
    setIsGameOver(value: boolean) {
      this.isGameOver = value
    }
  }
})

export default useTetrisStore
