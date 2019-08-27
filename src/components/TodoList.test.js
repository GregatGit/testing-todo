import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../Utils'

import TodoList from './TodoList'

const setUp = (props = []) => {
  const wrapper = shallow(<TodoList {...props} />)
  return wrapper
}

describe('TodoList component', () => {

  describe('Checking without props', () => {

    it('should render without props', () => {
      const wrapper = setUp()
      const result = findByTestAttr(wrapper, 'todoList')
      expect(result.length).toBe(1)
    })

    it('should contain no li elements', () => {
      const wrapper = setUp()
      const result = wrapper.find('li')
      expect(result.length).toBe(0)
    })
  })


})
// import Adapter from 'enzyme-adapter-react-15'
