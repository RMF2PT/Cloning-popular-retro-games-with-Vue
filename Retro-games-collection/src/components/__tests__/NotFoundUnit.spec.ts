import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import NotFound from '@/components/views/NotFound.vue'

describe('NotFound', () => {
  it('renders the correct message', () => {
    const wrapper = shallowMount(NotFound)
    expect(wrapper.find('p').exists()).toBe(true)
    const message = wrapper.find('p')
    expect(message.text()).toBe('404 - Page not found')
  })
})
