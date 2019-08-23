import React from 'react'
import { shallow } from 'enzyme'

import TodoList from './TodoList'

const setUp = (props = []) => {
  const component = shallow(<TodoList {...props} />)
  return component
}

describe('TodoList component', () => {

  describe('Checking without props', () => {

    it('should render without props', () => {
      const componet = setUp()
      
    })
  })
})
