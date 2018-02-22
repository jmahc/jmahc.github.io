import React from 'react'

import Header from '@/components/Header'
import Headline from '@/components/Headline'
import ProfilePicture from '@/components/ProfilePicture'

import '#/index.css'

import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfilePicture />
        <Headline />
      </div>
    )
  }
}

export default App
