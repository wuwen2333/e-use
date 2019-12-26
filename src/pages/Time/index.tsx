import React from 'react'
import { Row, Col } from 'react-bootstrap' 

import Current from './Current'
import TimeToTimestamp from './TimeToTimestamp'
import TimestampToTime from './TimestampToTime'

import './styles.scss'

const Time: React.FC = () => {
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
