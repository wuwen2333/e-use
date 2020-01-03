import { combineReducers } from 'redux'
import { alertReducer } from './alert/reducers'

export const rootReducer = combineReducers({
  alert: alertReducer,
})
export type RootState = ReturnType<typeof rootReducer>