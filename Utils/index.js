/*
  Source - https://github.com/simpletut/Testing-React-Redux-with-Jest-and-Enzyme
*/

import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore} from 'redux'

import rootReducer from '../src/reducers'
import { middlewares } from '../src/createStore'

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
  return propsErr
}

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}
// with middleware
export const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleWare(rootReducer, initialState)
}

