import React from 'react'
import { useSelector, connect } from 'react-redux'

const SubmitReportContainer = ({ rates }) => {
  const receiptList = useSelector(state => state.receiptList.list)
  const total = receiptList.reduce((sum, receipt) => {
    const amount = (parseFloat(receipt.amount) / rates[receipt.currency])
    return sum + amount
  }, 0)

  const hasError = total > 1000
  const onSubmit = () => {
    if (hasError) return
    console.log('Report', receiptList)
  }

  return (
    <div>
      {hasError && (<h5>Total is greater than 1,000 CAD</h5>)}
      <h1>Total is: {total.toFixed(2)} CAD</h1>
      <button disabled={hasError} onClick={onSubmit}>Submit</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  rates: state.currencyList.list
})
export default connect(mapStateToProps)(SubmitReportContainer)
