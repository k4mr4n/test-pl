import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import ReceiptListActions from '../actions/receipt-list.actions'

const ReceiptEnterContainer = ({ currencyList, receiptList }) => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('CAD')
  const onDescriptionChange = (e) => setDescription(e.target.value)
  const onAmountChange = (e) => setAmount(e.target.value)
  const onCurrencyChange = (e) => setCurrency(e.target.value)
  const addReceipt = () => {
    if (receiptList.length > 4) {
      return alert('No more than 5')
    }

    dispatch(ReceiptListActions.add({
      description,
      amount,
      currency
    }))
  }

  return (
    <div>
      <input type='text' value={description} onChange={onDescriptionChange} placeholder='desc' />
      <input type='number' value={amount} onChange={onAmountChange} placeholder='amount' />
      <select onChange={onCurrencyChange} value={currency}>
        {
          currencyList.map(c => (<option value={c} key={c}>{c}</option>))
        }
      </select>
      <button onClick={addReceipt}>Add Receipt</button>
    </div>
  )
}

const mapStateToProps = ({ currencyList, receiptList }) => ({
  currencyList: Object.keys(currencyList.list),
  receiptList: receiptList.list
})
export default connect(mapStateToProps)(ReceiptEnterContainer)
