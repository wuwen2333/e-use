import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import { rootReducer } from './store'

export default function configureStore(preloadedState?) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const store = createStore(rootReducer, preloadedState, compose(...enhancers))
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./store', () => store.replaceReducer(rootReducer))
  }
  return store
}