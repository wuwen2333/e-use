import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import useInterval from '../../utlis/useInterval'
import { timestampToTime } from './utils'

function Current() {
  const timestamp = Math.round(new Date() / 1000);
  const [current, setCurrent] = useState(timestamp);
  const [currentTime, setCurrentTime] = useState(timestampToTime(timestamp));
  useInterval(() => {
    const curTimestamp = Math.round(new Date() / 1000);
    setCurrent(curTimestamp);
    setCurrentTime(timestampToTime(curTimestamp))
  }, 1000);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Current time: {currentTime}</Card.Title>
        <Card.Title style={{ marginBottom: 0 }}>Current timestamp(s): {current}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Current
