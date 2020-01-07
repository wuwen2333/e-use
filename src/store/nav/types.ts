export const PRIORITIZE_NAV = 'PRIORITIZE_NAV'
export const SEARCH_NAV = 'SEARCH_NAV'
export const MERGE_LOCAL_NAV = 'MERGE_LOCAL_NAV'

interface PrioritizeNavAction {
  type: typeof PRIORITIZE_NAV
  index: number
}
interface SearchNavAction {
  type: typeof SEARCH_NAV
  keyword: string
}
interface MergeLocalNavAction {
  type: typeof MERGE_LOCAL_NAV
  data: string[]
}

export type NavActionTypes = PrioritizeNavAction | SearchNavAction | MergeLocalNavAction