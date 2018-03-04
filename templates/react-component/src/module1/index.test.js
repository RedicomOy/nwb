import React from 'react'
import { shallow } from 'enzyme'

import Module1 from './'

describe('<Module1/>', () => {
  it('should render the title', () => {
    const wrapper = shallow(<Module1 title="This is title" />)

    expect(wrapper.find('h1').text()).toBe('This is title')
  })
})
