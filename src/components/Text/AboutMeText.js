import React, { useState, useEffect } from 'react'

import getAboutMeText from './text-options'

// import styles from './Button.module.css'

/**
 * Text for the "About Me" text section on the About page.
 * @param {Object} props - The component props.
 * @param {type} props.text - The text to be displayed.
 */
export function AboutMeText({ text }) {
  const [aboutMeText, setAboutMeText] = useState('')

  useEffect(() => {
    const text = getAboutMeText()
    setAboutMeText(text)
  }, [])

  return (
    <p className="mb-4 text-lg leading-relaxed text-gray-800">{aboutMeText}</p>
  )
}
