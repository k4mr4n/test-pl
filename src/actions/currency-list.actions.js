import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetch: null,
  set: ['list']
}, { prefix: 'CURRENCY_' })

export const CurrencyListTypes = Types
export default Creators
