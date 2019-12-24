import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { copyText } from '../../utlis/common'
import useInterval from '../../utlis/useInterval'
import { timestampToTime } from './utils'

function Current() {
  let copyTextEl = React.createRef();
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
        <Card.Title style={{ marginBottom: 0, position: 'relative' }}>
          Current timestamp(s): {current}
          <input
            type="text"
            value={current}
            ref={copyTextEl}
            style={{ opacity: 0, position: 'absolute', left: '-100%'}}
          />
          <Button
            variant="outline-primary"
            style={{ marginLeft: '1rem', lineHeight: '1.15' }}
            onClick={() => copyText(copyTextEl.current)}
          >
            copy
          </Button>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Current
