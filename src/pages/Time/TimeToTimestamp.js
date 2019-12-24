import React, { useState } from 'react'
import {
  Card,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { timeToTimestamp } from './utils'

function TimeToTimestamp() {
  const current = new Date();
  const [timestamp, setTimestamp] = useState('');
  const [year, setYear] = useState(current.getFullYear());
  const [month, setMonth] = useState(current.getMonth() + 1);
  const [date, setDate] = useState(current.getDate());
  const [hour, setHour] = useState(current.getHours());
  const [mins, setMins] = useState(current.getMinutes());
  const [seconds, setSeconds] = useState(current.getSeconds());
  return (
    <Card>
      <Card.Body>
        <Card.Title>Time To Timestamp</Card.Title>
        <Row>
          <Col style={{ padding: '0 5px 0 15px' }}>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col style={{ padding: '0 5px' }}>
            <Form.Group>
              <Form.Label>Month</Form.Label>
              <Form.Control
                placeholder="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col style={{ padding: '0 5px' }}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col style={{ padding: '0 5px' }}>
            <Form.Group>
              <Form.Label>Hour</Form.Label>
              <Form.Control
                placeholder="Hour"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col style={{ padding: '0 5px' }}>
            <Form.Group>
              <Form.Label>Minute</Form.Label>
              <Form.Control
                placeholder="Minute"
                value={mins}
                onChange={(e) => setMins(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col style={{ padding: '0 5px' }}>
            <Form.Group>
              <Form.Label>Seconds</Form.Label>
              <Form.Control
                placeholder="Seconds"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="primary"
          style={{ marginTop: '1rem' }}
          onClick={() => setTimestamp(timeToTimestamp(`${year}-${month}-${date} ${hour}:${mins}:${seconds}`))}
        >
          convert
        </Button>
        <Form.Group style={{marginTop: '1rem'}}>
          <Form.Label>Timestamp</Form.Label>
            <Form.Control 
              readOnly
              placeholder="Timestamp"
              value={timestamp}
              onChange={e => setTimestamp(e.target.value)}
            />
        </Form.Group>
      </Card.Body>
    </Card>
  )
}

export default TimeToTimestamp
