import React, { Component } from 'react'

import { Header, ProfilePicture } from '@/components'
import Resume from '@/containers/Resume'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfilePicture />
        <Resume />
      </div>
    )
  }
}

export default App
