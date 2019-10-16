import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import CurrencyListActions from '../actions/currency-list.actions'

export function * fetchCurrencyList () {
  const response = yield call(axios.get, 'https://api.exchangeratesapi.io/latest?base=CAD')
  const { status, data } = response
  if (status === 200) {
    yield put(CurrencyListActions.set(data.rates))
  }
}
