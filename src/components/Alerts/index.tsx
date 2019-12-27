import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { Alert } from 'react-bootstrap'

import { RootState } from '../../store'

const mapState = (state: RootState) => ({
  alerts: state.alert.alerts
})

const mapDispatch = {
  dismissAlert: (id) => ({ type: 'DISMISS_ALERT', id }),
}

const connector = connect(
  mapState,
  mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

const Alerts: React.FC<PropsFromRedux> = ({ alerts, dismissAlert }) => {
  return (
    <div className="alerts">
      {
        alerts.map(item => (
          <Alert
            key={item.id}
            variant={item.variant}
            dismissible={item.dismissible}
            onClose={() => dismissAlert(item.id)}
          >
            {item.message}
          </Alert>
        ))
      }
    </div>
  )
}

export default connector(Alerts);