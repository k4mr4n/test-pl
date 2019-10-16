import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CurrencyListActions from '../actions/currency-list.actions'

import ReceiptListContainer from './receipt-list.container'
import ReceiptEnterContainer from './receipt-enter.container'
import SubmitReportContainer from './submit-report.container'

const ReportView = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CurrencyListActions.fetch())
    setInterval(() => {
      dispatch(CurrencyListActions.fetch())
    }, 10000)
  }, [])

  return (
    <div>
      <ReceiptEnterContainer />
      <ReceiptListContainer />
      <SubmitReportContainer />
    </div>
  )
}

export default ReportView
