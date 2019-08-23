import React from  'react'
import { shallow } from 'enzyme'

import TodoList from './TodoList'

const setUp = (props = {}) => {
  const component = shallow(<TodoList {...props} />)
  return component
}

describe('TodoList componet', () => {
  
  let component
  beforeEach(() => {
    component = setup()
  })

  it('should render with todo', () => {
    const wrapper = 
  })
  
})
