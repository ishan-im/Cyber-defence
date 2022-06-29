import { Fragment } from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (  <Fragment>
               <Component {...pageProps} />
               
            </Fragment>)
}

export default MyApp
