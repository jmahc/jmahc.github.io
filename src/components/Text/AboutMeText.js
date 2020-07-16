import React, { useState, useEffect } from 'react'

// import styles from './Button.module.css'

/**
 * Text for the "About Me" text section on the About page.
 * @param {Object} props - The component props.
 * @param {type} props.text - The text to be displayed.
 */
export function AboutMeText({ text }) {
  const [aboutMeText, setAboutMeText] = useState('')

  function getAboutMeText() {
    fetch('http://localhost:3000/api/about')
      .then((response) => response.json())
      .then((data) => setAboutMeText(data.text))
  }

  useEffect(() => {
    async function getAboutMeTextAsync() {
      try {
        const fetchResponse = await fetch('http://localhost:3000/api/about')
        const data = await fetchResponse.json()
        setAboutMeText(data.text)
      } catch (err) {
        return console.log('Error', err)
      }
    }

    getAboutMeTextAsync()
  }, [])

  return (
    <p className="mb-4 text-lg leading-relaxed text-gray-800">{aboutMeText}</p>
  )
}

/*
An artist of considerable range, Jenna the name taken by Melbourne-raised,
      Brooklyn-based Nick Murphy writes, performs and records all of his own
      music, giving it a warm, intimate feel with a solid groove structure. An
      artist of considerable range.



      WORKS:



      export function AboutMeText({ text }) {
  const [aboutMeText, setAboutMeText] = useState('')

  const testApiCall = () => {
    console.log('INside Testing the API call...')

    fetch('http://localhost:3000/api/about')
      .then((response) => {
        console.log('We got a response!')
        console.info(response)
        return response.json()
      })
      .then((data) => {
        console.log('Response json data... ', data)
        return setAboutMeText(data.text)
      })

    console.log('Test api call ended...')
  }

  console.log('Testing the API call...')
  testApiCall()

  // useEffect(() => {
  //   let student = {}
  //   setStudent(student)
  // }, [])

  return (
    <p className="mb-4 text-lg leading-relaxed text-gray-800">{aboutMeText}</p>
  )
}
*/
