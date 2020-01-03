import {
  AlertState,
  AlertActionTypes,
  SHOW_ALERT,
  DISMISS_ALERT
} from './types'

const initialState: AlertState = {
  alerts: []
}
export function alertReducer(
  state = initialState,
  action: AlertActionTypes
): AlertState {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        alerts: [...state.alerts, action.payload]
      }
    case DISMISS_ALERT:
      return {
        alerts: state.alerts.filter(
          alert => alert.id !== action.id
        )
      }
    default:
      return state
  }
}