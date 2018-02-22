import React from 'react'

import Blotter from 'blotterjs'
// import ChannelSplitMaterial from '%/ChannelSplitMaterial'

import './styles.css'

let text = new Blotter.Text('Hello', {
  family: 'serif',
  size: 120,
  fill: '#171717'
})

var material = new Blotter.ChannelSplitMaterial()

var blotter = new Blotter(material, { texts: text })

var scope = blotter.forText(text)

const Headline = props => {
  return (
    <div className="Headline">
      <h1 className="Headline-text">Work in progress.</h1>
      <div className="Headline-blotter">{scope}</div>
    </div>
  )
}

export default Headline
