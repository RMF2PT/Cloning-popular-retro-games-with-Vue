import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'

describe('NavBar', () => {
  it('renders properly', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toContain('Retro Games Collection')

    const h1Text = wrapper.find('h1').text()
    expect(h1Text).toBe('Retro Games Collection')
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.findAll('a').length).toBe(4)
  })
})
