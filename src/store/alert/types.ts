export const SHOW_ALERT = 'SHOW_ALERT'
export const DISMISS_ALERT = 'DISMISS_ALERT'

export interface Alert {
  id: string;
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
  message: string;
  delay?: number;
  dismissible?: boolean;
}

export interface AlertState {
  alerts: Alert[];
}

interface ShowAlertAction {
  type: typeof SHOW_ALERT
  payload: Alert
}
interface DismissAlertAction {
  type: typeof DISMISS_ALERT
  id: string
}
export type AlertActionTypes = ShowAlertAction | DismissAlertAction