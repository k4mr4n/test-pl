import { createReducer } from 'reduxsauce'

import { CurrencyListTypes as Types } from '../actions/currency-list.actions'

export const INITIAL_STATE = {
  list: []
}

export const set = (state, { list }) => ({ ...state, list })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET]: set
})

export default reducer
