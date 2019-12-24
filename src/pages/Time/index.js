import React, { useState } from 'react'
import { Row, Col, Alert } from 'react-bootstrap' 

import Current from './Current'
import TimeToTimestamp from './TimeToTimestamp'
import TimestampToTime from './TimestampToTime'

import './styles.scss'

function Time() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const alert = (variant, msg) => {
    setShowAlert(true);
    setAlertVariant(variant);
    setAlertMsg(msg);
  }
  return (
    <>
      {showAlert && (
        <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
          {alertMsg}
        </Alert>
      )}
      <Current alert={alert} />
      <Row>
        <Col><TimestampToTime /></Col>
        <Col><TimeToTimestamp /></Col>
      </Row>
    </>
  )
}

export default Time
