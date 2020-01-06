import React from 'react'

import './styles.scss'

import navs from '../../conts/navigator';

interface Props {
  currentPage: string;
  onPageChange: (currentPage?: object) => void;
}

const Navigator: React.FC<Props> = ({ currentPage, onPageChange }) => {

  return (
    <div className={`navigator ${currentPage && 'sidebar'}`}>
      <div className="nav-wrapper">
        <header>
          <div className="logo" onClick={() => onPageChange()}></div>
          <p>Ease to use</p>
        </header>
        <ul className="tool-list">
          {
            navs.map((item, index) => (
              <li className={`tool ${currentPage === item.name && 'active'}`} key={index} onClick={() => onPageChange(item)} title={item.desc}>
                <div className="icon">
                  <img src={require(`../../assets/images/${item.icon}`)} alt=""/>
                </div>
                <div className="info">
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navigator
