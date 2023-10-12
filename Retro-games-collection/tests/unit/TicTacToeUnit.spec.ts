import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TicTacToe from '@games/ticTacToe/TicTacToeGame.vue'

describe('TicTacToe', () => {
  it('renders the correct number of empty squares', () => {
    const wrapper = shallowMount(TicTacToe)
    const cells = wrapper.findAll('.game-cell')
    expect(cells.length).toBe(9)
    for (let i = 0; i < cells.length; i++) {
      expect(cells[i].text()).toBe('')
    }
  })

  it('starts the game end button is pressed', async () => {
    const wrapper = shallowMount(TicTacToe)
    const startBtn = wrapper.find('#start-button')
    await startBtn.trigger('click')
    const cells = wrapper.findAll('.game-cell')
    await cells[0].trigger('click')
    expect(cells[0].text()).toBe('X')
  })

  it('detects a win', async () => {
    const wrapper = shallowMount(TicTacToe)
    const startBtn = wrapper.find('#start-button')
    await startBtn.trigger('click')
    const cells = wrapper.findAll('.game-cell')
    await cells[0].trigger('click')
    expect(cells[0].text()).toBe('X')
    setTimeout(() => {
      cells[1].trigger('click')
      expect(cells[1].text()).toBe('X')
    }, 1000)
    setTimeout(() => {
      cells[2].trigger('click')
      expect(cells[2].text()).toBe('X')
    }, 1000)
    setTimeout(() => {
      expect(wrapper.find('.end-game-message').text()).toBe('Game over and the winner is you')
    }, 1000)
  })
})
