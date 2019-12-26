import React from 'react'

import './styles.scss';

interface Props {
  title: string;
  subTitle?: string;
}

const PageHeader: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className="page-header">
      <p className="title">{ title }</p>
      <p className="sub-title">{ subTitle }</p>
    </div>
  )
}

export default PageHeader
