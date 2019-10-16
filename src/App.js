import React from 'react'
import { Provider } from 'react-redux'

import createStore from './reducers'
import ReportView from './containers/report.container'

function App () {
  const store = createStore()

  return (
    <Provider store={store}>
      <ReportView />
    </Provider>
  )
}

export default App
