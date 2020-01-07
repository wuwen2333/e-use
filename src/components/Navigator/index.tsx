import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { prioritizeNav, searchNav } from '../../store/nav/actions'
import './styles.scss'

interface Props {
  currentPage: string;
  onPageChange: (currentPage?: object) => void;
}

const mapState = (state) => ({
  navs: state.nav.navs
})
const connector = connect(
  mapState,
  { prioritizeNav, searchNav }
)
type PropsFromRedux = ConnectedProps<typeof connector>

const Navigator: React.FC<Props & PropsFromRedux> = ({ currentPage, onPageChange, navs, prioritizeNav, searchNav }) => {
  const [keyword, setKeyword] = React.useState('');

  return (
    <div className={`navigator ${currentPage && 'sidebar'}`}>
      <div className="nav-wrapper">
        <header>
          <div className="logo" onClick={() => onPageChange()}>
            <div className="icon"></div>
            <p>Easy to use</p>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="search..."
              value={keyword}
              onChange={(e:any) => {
                setKeyword(e.target.value)
                searchNav(e.target.value)
              }}
              onInput={(e:any) => {
                setKeyword(e.target.value)
                searchNav(e.target.value)
              }}
            />
            {keyword && <div className="clear" title="clear" onClick={() => {
              setKeyword('')
              searchNav('')
            }}></div>}
          </div>
        </header>
        <ul className="tool-list">
          {
            navs.map((item, index) => (
              !item.hide && <li
                className={`tool ${currentPage === item.name && 'active'}`}
                key={item.name}
                onClick={() => {
                  onPageChange(item)
                  prioritizeNav(index)
                }}
                title={item.desc}
              >
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

export default connector(Navigator);
