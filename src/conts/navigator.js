import React from 'react';
import Time from '../pages/Time'
import QRCode from '../pages/QRCode'

const navigator = [
  {
    name: 'time',
    title: 'Time conversion',
    desc: 'Time conversion',
    component: <Time />,
    icon: 'icon_time.png',
  },
  {
    name: 'qrcode',
    title: 'QRCode',
    desc: 'QRCode',
    component: <QRCode />,
    icon: 'icon_time.png',
  },
]

export default navigator;