import { createStore, applyMiddleware } from 'redux' 
import ReduxThunk  from 'redux-thunk'
import  RootReducer from './reducers'

export const middlewares = [ReduxThunk]

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddlewares(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())