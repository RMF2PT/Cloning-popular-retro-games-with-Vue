import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AboutCmp from '@/components/views/AboutCmp.vue'

describe('AboutCmp', () => {
  it('renders the correct message', () => {
    const wrapper = shallowMount(AboutCmp)
    expect(wrapper.find('h1').exists()).toBe(true)
    const message = wrapper.find('h1')
    expect(message.text()).toBe('Project: Cloning popular retro games with Vue')
    expect(wrapper.findAll('section').length).toBe(6)
  })
})
