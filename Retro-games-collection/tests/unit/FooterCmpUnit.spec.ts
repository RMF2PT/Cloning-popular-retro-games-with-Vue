import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterCmp from '@ui/FooterCmp.vue'

describe('NavBar', () => {
  it('renders properly', () => {
    const wrapper = mount(FooterCmp)

    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.findAll('a').length).toBe(4)
  })
})
