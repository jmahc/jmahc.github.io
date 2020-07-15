import App from 'next/app'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import '../styles/index.css'

import '@fortawesome/fontawesome-free/css/all.min.css'

// This default export is required in a new `pages/_app.js` file.
export default class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>My new cool app</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}
