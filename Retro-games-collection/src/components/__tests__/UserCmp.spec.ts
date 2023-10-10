import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UserCmp from '../UserCmp.vue'

describe('UserCmp', () => {
  it('renders the age properly', () => {
    const wrapper = mount(UserCmp, { props: { age: 37 } })
    const userAge = wrapper.find('p').text()

    expect(userAge).toBe('User is 37 years old.')
  })
})
