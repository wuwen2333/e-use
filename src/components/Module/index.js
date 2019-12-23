import React from 'react'

import PageHeader from '../PageHeader'

function Module({title, subTitle, children, className}) {
  return (
    <div className={`module ${className}`}>
      <PageHeader title={title} subTitle={subTitle} />
      {children}
    </div>
  )
}

export default Module
