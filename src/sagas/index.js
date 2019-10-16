import { all, takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
// import { receiptListTypes } from '../actions/receipt-list.actions'
import { CurrencyListTypes } from '../actions/currency-list.actions'

/* ------------- Sagas ------------- */
import { fetchCurrencyList } from './currency-list.saga'

export default function * rootSaga () {
  yield all([
    takeLatest(CurrencyListTypes.FETCH, fetchCurrencyList)
  ])
}
