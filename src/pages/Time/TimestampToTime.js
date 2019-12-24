import React, { useState } from 'react'
import {
  Card,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { timestampToTime } from './utils'

function TimestampToTime() {
  const [timestamp, setTimestamp] = useState('');
  const [format, setFormat] = useState('YY-MM-DD hh:mm:ss');
  const [localTime, setLocalTime] = useState('');
  return (
    <Card>
      <Card.Body>
        <Card.Title>Timestamp To Time</Card.Title>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Timestamp</Form.Label>
          <Col sm={9}>
            <Form.Control
              placeholder="timestamp"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Format</Form.Label>
          <Col sm={9}>
            <Form.Control 
              placeholder="format"
              value={format}
              onChange={e => setFormat(e.target.value)}
            />
            <Form.Text className="text-muted">
              Default: YY-MM-DD hh:mm:ss
            </Form.Text>
          </Col>
        </Form.Group>
        <Row>
          <Col sm={3}></Col>
          <Col sm={9}>
            <Button
              variant="primary"
              style={{ height: '30px' }}
              onClick={() => setLocalTime(timestampToTime(timestamp, format))}
            >
              convert
            </Button>
          </Col>
        </Row>
        <Form.Group as={Row} style={{marginTop: '1rem'}}>
          <Form.Label column sm={3}>Local time</Form.Label>
          <Col sm={9}>
            <Form.Control 
              readOnly
              placeholder="Local time"
              value={localTime}
              onChange={e => setLocalTime(e.target.value)}
            />
          </Col>
        </Form.Group>
      </Card.Body>
    </Card>
  )
}

export default TimestampToTime
