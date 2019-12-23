import React from 'react'

import './styles.scss';

function PageHeader({ title, subTitle }) {
  return (
    <div className="page-header">
      <p className="title">{ title }</p>
      <p className="sub-title">{ subTitle }</p>
    </div>
  )
}

export default PageHeader
