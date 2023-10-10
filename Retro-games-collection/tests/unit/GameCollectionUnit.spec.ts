import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import GameCollection from '@views/GameCollection.vue'

describe('GameCollection', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(GameCollection)
    expect(wrapper.find('h1').exists()).toBe(true)
    const message = wrapper.find('h1')
    expect(message.text()).toBe('Games Collection')
    expect(wrapper.findAll('.card').length).toBe(3)
  })
})
