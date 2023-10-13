import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RockPaperScissorsLizardSpock from '@games/rockPaperScissorsLizardSpock/RockPaperScissorsLizardSpockGame.vue'

describe('RockPaperScissorsLizardSpock', () => {
  it('should display the correct title', () => {
    const wrapper = mount(RockPaperScissorsLizardSpock)
    const title = wrapper.find('h1')
    expect(title.text()).toBe('Rock Paper Scissors Lizard Spock')
  })
  it('should display the correct options', () => {
    const wrapper = shallowMount(RockPaperScissorsLizardSpock)
    const options = wrapper.findAllComponents('.player-option')
    expect(options).toHaveLength(5)
    expect(options[0].attributes('title')).toBe('Rock')
    expect(options[1].attributes('title')).toBe('Paper')
    expect(options[2].attributes('title')).toBe('Scissors')
    expect(options[3].attributes('title')).toBe('Lizard')
    expect(options[4].attributes('title')).toBe('Spock')
  })
})
