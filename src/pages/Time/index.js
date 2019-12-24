import React from 'react'
import { Row, Col } from 'react-bootstrap' 

import Current from './Current'
import TimeToTimestamp from './TimeToTimestamp'
import TimestampToTime from './TimestampToTime'

import './styles.scss'

function Time() {
  return (
    <>
      <Current />
      <Row>
        <Col><TimestampToTime /></Col>
        <Col><TimeToTimestamp /></Col>
      </Row>
    </>
  )
}

export default Time
