import React from 'react'
import { render } from 'react-dom'

import App from '@/containers/App'
// import Root from '@/containers/Root'

// Let's begin!
startReactApplication(App)

/**
 * Starts the React application by attaching to the DOM at the "⚛️" ID.
 *
 * @param {Object} ApplicationComponent - The React application.
 * @returns A rendered React application.
 */
function startReactApplication(ApplicationComponent) {
  const AppContainer = require('react-hot-loader').AppContainer
  const noHoist = {}

  return render(
    <AppContainer {...noHoist}>
      <ApplicationComponent />
    </AppContainer>,
    document.getElementById('⚛️')
  )
}

// Allow for Hot Module Reloading.
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NewApp = require('./containers/App').default
    startReactApplication(NewApp)
  })
}
