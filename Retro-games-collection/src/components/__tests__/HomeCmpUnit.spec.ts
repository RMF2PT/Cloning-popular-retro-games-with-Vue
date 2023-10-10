import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeCmp from '@/components/views/HomeCmp.vue'

describe('HomeCmp', () => {
  it('renders the correct message', () => {
    const wrapper = shallowMount(HomeCmp)
    expect(wrapper.find('h1').exists()).toBe(true)
    const message = wrapper.find('h1')
    expect(message.text()).toBe('Welcome to my personal project')
    expect(wrapper.findAll('p').length).toBe(2)
  })
})
