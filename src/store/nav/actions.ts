import { PRIORITIZE_NAV, SEARCH_NAV, NavActionTypes } from './types'

export function prioritizeNav (index): NavActionTypes {
  return {
    type: PRIORITIZE_NAV,
    index
  }
}

export function searchNav (keyword): NavActionTypes {
  return {
    type: SEARCH_NAV,
    keyword
  }
}