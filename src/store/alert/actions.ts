import { Alert, SHOW_ALERT, DISMISS_ALERT, AlertActionTypes } from './types'

export function showAlert(alert: Alert): AlertActionTypes {
  return {
    type: SHOW_ALERT,
    payload: alert
  }
}

export function dismissAlert(id: string): AlertActionTypes {
  return {
    type: DISMISS_ALERT,
    id
  }
}