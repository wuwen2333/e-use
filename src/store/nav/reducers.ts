import { PRIORITIZE_NAV, SEARCH_NAV, NavActionTypes } from './types'

import navs from '../../conts/navigator';

const initialState = {
  navs: navs,
}

export function navReducer (
  state = initialState,
  action: NavActionTypes
) {
  const { navs } = state;

  switch (action.type) {
    case PRIORITIZE_NAV:
      return {
        navs: (navs.splice(action.index, 1)).concat(navs)
      }
    case SEARCH_NAV:
      return {
        navs: navs.map(item => ({
          ...item,
          hide: action.keyword ? !((item.title.toLocaleLowerCase()).includes(action.keyword.toLocaleLowerCase()) || (item.desc.toLocaleLowerCase()).includes(action.keyword.toLocaleLowerCase())) : false
        }))
      }
    default:
      return state
  }
}