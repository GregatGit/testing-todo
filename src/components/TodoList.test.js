import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr, testStore } from '../../Utils'

import TodoList from './TodoList'

const setUp = (initalState = {}) => {
  const store = testStore(initalState)
  const wrapper = shallow(<TodoList store={store} />).childAt(0).dive()
  console.log(wrapper.debug())
  return wrapper
}

describe('TodoList component', () => {

  describe('Check todoList without props', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setUp([
        {todo: 'test name 1', done: false}, 
        {todo: 'test name 2', done: false}, 
        {todo:'test name 3', done: false}
      ])
    })

    it('should render without props', () => {
      //const wrapper = setUp()
      const result = findByTestAttr(wrapper, 'todoList')
      expect(result.length).toBe(1)
    })

    it('should contain no li elements', () => {
      //const wrapper = setUp()
      const result = wrapper.find('li')
      expect(result.length).toBe(2)
    })
  })

  describe('Check todoList with props', () => {

    it('should have 3 li components', () => {
      const wrapper = setUp([
        {todo: 'test name 1', done: false}, 
        {todo: 'test name 2', done: false}, 
        {todo:'test name 3', done: false}
      ])
      const result = wrapper.find('li')
      expect(result.length).toBe(2)
    })
  })
  

})
// import Adapter from 'enzyme-adapter-react-15'
