import React from 'react'

import Link from '@/components/Link'

import './styles.css'

const links = {
  github: {
    name: 'GitHub',
    url: 'https://github.com/jmahc/'
  },
  resume: {
    name: 'Resume',
    url: 'https://google.com/'
  }
}

const HeaderItem = props => <div className="Header-item">{props.children}</div>

const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <HeaderItem>
        <Link isBlank={true} text={links.github.name} url={links.github.url} />
      </HeaderItem>
      <HeaderItem>
        <Link isBlank={true} text={links.resume.name} url={links.resume.url} />
      </HeaderItem>
    </div>
  </div>
)

export default Header
