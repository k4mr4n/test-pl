import Actions from '../actions/currency-list.actions'
import reducer, { INITIAL_STATE } from './currency-list.reducer'

describe('Currency Reducer tests', () => {
  it('Should set currency list', () => {
    const list = [{ a: 1 }, { b: 2 }, { c: 3 }]
    const state = reducer(undefined, Actions.set(list))
    expect(state.list).toBe(list)
    expect(INITIAL_STATE.list).toEqual([])
  })
})
