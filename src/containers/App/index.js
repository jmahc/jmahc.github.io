import React from 'react'

// import Flex from '@/components/Flex'
// import Outline from '@/components/Outline'
// import Overlay from '@/components/Overlay'
// import ProfilePicture from '@/components/ProfilePicture'

import '#/index.css'

import './styles.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-font">Jordan McArdle</div>
        <div className="App-container">
          {/* <Overlay direction="right" />
          <Outline /> */}
          {/* <ProfilePicture /> */}
        </div>
      </div>
    )
  }
}
