import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'

import { fetchCurrencyList } from './currency-list.saga'
import CurrencyListActions from '../actions/currency-list.actions'

describe('Currency saga test', () => {
  const gen = cloneableGenerator(fetchCurrencyList)()

  it('should call fetch currency', () => {
    expect(gen.next().value).toEqual(call(axios.get, 'https://api.exchangeratesapi.io/latest?base=CAD'))
  })

  it('should be success', () => {
    const clone = gen.clone()
    const mockResponse = { status: 200, data: { rates: [] } }

    expect(clone.next(mockResponse).value).toEqual(put(CurrencyListActions.set(mockResponse.data.rates)))
    expect(clone.next().done).toBeTruthy()
  })

  it('should fail', () => {
    const clone = gen.clone()
    const response = { status: 500 }
    expect(clone.next(response).done).toBeTruthy()
  })
})
