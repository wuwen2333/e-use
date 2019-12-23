import React from 'react'
import { Card } from 'react-bootstrap'

import TimeToTimestamp from './TimeToTimestamp'
import TimestampToTime from './TimestampToTime'

import './styles.scss'

function Time() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Time To Timestamp</Card.Title>
          <TimeToTimestamp />
        </Card.Body>
      </Card>
      <Card style={{ marginTop: '20px' }}>
        <Card.Body>
          <Card.Title>Timestamp To Time</Card.Title>
          <TimestampToTime />
        </Card.Body>
      </Card>
    </>
  )
}

export default Time
