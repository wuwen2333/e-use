import React from 'react'

import PageHeader from '../PageHeader'

interface Props {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
  className: string;
}

const Module: React.FC<Props> = ({title, subTitle, children, className}) => {
  return (
    <div className={`module ${className}`}>
      <PageHeader title={title} subTitle={subTitle} />
      {children}
    </div>
  )
}

export default Module
