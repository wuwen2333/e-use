import React from 'react';
import Time from '../pages/Time'
import Encode from '../pages/Encode'

const navigator = [
  {
    name: 'time',
    title: 'Time conversion',
    desc: 'Time conversion',
    component: <Time />,
    icon: 'icon_time.png',
  },
  {
    name: 'encode',
    title: 'encode and decode',
    desc: 'encode and decode',
    component: <Encode />,
    icon: 'icon_time.png',
  },
]

export default navigator;
