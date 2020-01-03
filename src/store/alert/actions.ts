import { Dispatch } from 'redux';

import { Alert, SHOW_ALERT, DISMISS_ALERT, AlertActionTypes } from './types'

export function showAlert(alert: Alert) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: alert
    })
    if (!alert.dismissible) {
      setTimeout(() => {
        dispatch(dismissAlert(alert.id))
      }, (alert.delay || 2) * 1000)
    }
  }
}

export function dismissAlert(id: string): AlertActionTypes {
  return {
    type: DISMISS_ALERT,
    id
  }
}