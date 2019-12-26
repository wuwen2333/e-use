import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { copyText } from '../../utlis/common'
import useInterval from '../../utlis/useInterval'
import { timestampToTime } from './utils'

const Current: React.FC = () => {
  let copyTextEl = React.createRef<HTMLInputElement>();
  const timestamp = Math.round((new Date() as any) / 1000);
  const [current, setCurrent] = useState(timestamp);
  const [currentTime, setCurrentTime] = useState(timestampToTime(String(timestamp)));
  useInterval(() => {
    const curTimestamp = Math.round((new Date() as any) / 1000);
    setCurrent(curTimestamp);
    setCurrentTime(timestampToTime(String(curTimestamp)))
  }, 1000);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Current time: {currentTime}</Card.Title>
        <Card.Title style={{ marginBottom: 0, position: 'relative' }}>
          Current timestamp(s): {current}
          <input
            type="text"
            readOnly
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
