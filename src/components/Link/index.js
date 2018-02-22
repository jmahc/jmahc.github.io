import React from 'react'

import './styles.css'

const Link = props => (
  <a
    className="Link"
    href={props.url}
    target={props.isBlank ? '_blank' : ''}
    rel={props.isBlank ? 'noopener noreferrer' : ''}
  >
    {props.text}
  </a>
)

export default Link