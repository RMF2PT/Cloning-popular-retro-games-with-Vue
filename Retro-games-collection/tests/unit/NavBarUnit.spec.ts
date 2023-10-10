import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '@ui/NavBar.vue'

describe('NavBar', () => {
  it('renders properly', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toContain('Retro Games Collection')

    const titleText = wrapper.find('#title').text()
    expect(titleText).toBe('Retro Games Collection')
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.findAll('router-link').length).toBe(3)
  })
})
