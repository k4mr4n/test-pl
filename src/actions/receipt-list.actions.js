import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  add: ['receipt']
}, { prefix: 'RECEIPT_LIST_' })

export const receiptListTypes = Types
export default Creators
