import { combineReducers } from 'redux'
import { alertReducer } from './alert/reducers'
import { navReducer } from './nav/reducers'

export const rootReducer = combineReducers({
  alert: alertReducer,
  nav: navReducer
})
export type RootState = ReturnType<typeof rootReducer>