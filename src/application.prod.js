import React from 'react'
import { render } from 'react-dom'

import App from '@/containers/App'

// Let's begin!
startReactApplication(App)

/**
 * Starts the React application by attaching to the DOM at the "⚛️" ID.
 *
 * @param {Object} ApplicationComponent - The React application.
 * @returns A rendered React application.
 */
function startReactApplication(ApplicationComponent) {
  return render(<ApplicationComponent />, document.getElementById('⚛️'))
}
