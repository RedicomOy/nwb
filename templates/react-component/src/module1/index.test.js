import React from 'react'
import { shallow } from 'enzymy'

describe('<Module1/>', () => {
  it('should render the title', () => {
    const wrapper = shallow('<Module1 title="this is title"/>')

    expect(wrapper.find('h1').text()).toBe('This is title')
  })
})
