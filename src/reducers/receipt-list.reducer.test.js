import Actions from '../actions/receipt-list.actions'
import reducer, { INITIAL_STATE } from './receipt-list.reducer'

describe('Currency Reducer tests', () => {
  it('Should add currency list', () => {
    const item1 = { a: 1 }
    const item2 = { b: 2 }
    const state1 = reducer(undefined, Actions.add(item1))
    expect(state1.list).toEqual([item1])
    const state2 = reducer(state1, Actions.add(item2))
    expect(state2.list).toEqual([item1, item2])
    expect(INITIAL_STATE.list).toEqual([])
  })
})
