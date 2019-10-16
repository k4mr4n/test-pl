import React from 'react'
import { useSelector } from 'react-redux'

const ReceiptListContainer = () => {
  const receiptList = useSelector(state => state.receiptList.list)
  return (
    <div>
      <h1>Receipts:</h1>
      <ul>
        {
          receiptList.map((r, index) =>
            (<li key={index}>{r.description} - {r.amount} - {r.currency}</li>))
        }
      </ul>
    </div>
  )
}

export default ReceiptListContainer
