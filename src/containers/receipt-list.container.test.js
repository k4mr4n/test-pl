import React from 'react'
import { createStore } from 'redux'

import ReceiptListContainer from './receipt-list.container'
import { renderWithRedux } from '../utils/testing.util'

describe('Receipt List', () => {
  test('should render receipt list', () => {
    const receiptList = [{ description: 'dsc', amount: 100, currency: 'CAD' }]
    const store = createStore(() => ({ receiptList: { list: receiptList } }))
    const { baseElement } = renderWithRedux(<ReceiptListContainer />, {
      store
    })
    expect(baseElement).toMatchSnapshot()
  })
})
