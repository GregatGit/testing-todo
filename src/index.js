import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from './reducers'
import { store } from './createStore'



ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
)
