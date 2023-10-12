import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RockPaperScissorsLizardSpock from '@games/rockPaperScissorsLizardSpock/RockPaperScissorsLizardSpockGame.vue'

describe('RockPaperScissorsLizardSpock', () => {
  it('should display the correct title', () => {
    const wrapper = mount(RockPaperScissorsLizardSpock)
    const title = wrapper.find('h1')
    expect(title.text()).toBe('Rock Paper Scissors Lizard Spock')
  })
  it('should display the correct options', () => {
    const wrapper = mount(RockPaperScissorsLizardSpock)
    const options = wrapper.findAll('.player-option')
    expect(options).toHaveLength(5)
    expect(options[0].wrapperElement.title).toBe('Rock')
    expect(options[1].wrapperElement.title).toBe('Paper')
    expect(options[2].wrapperElement.title).toBe('Scissors')
    expect(options[3].wrapperElement.title).toBe('Lizard')
    expect(options[4].wrapperElement.title).toBe('Spock')
  })
})
