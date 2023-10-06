import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GreetingMsg from '../GreetingMsg.vue'

describe('GreetingMsg.vue', () => {
  it('renders the greeting message correctly', () => {
    const wrapper = mount(GreetingMsg, { props: { age: 37 } })
    const greetingMessage = wrapper.find('p').text()

    expect(greetingMessage).toBe('Secret message!')
  })
})
