import { createReducer } from 'reduxsauce'

import { receiptListTypes as Types } from '../actions/receipt-list.actions'

export const INITIAL_STATE = {
  list: []
}

export const add = (state, { receipt }) => ({ ...state, list: [...state.list, receipt] })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD]: add
})

export default reducer
