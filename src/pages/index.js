import React from "react"

import Header from "../components/header/header"
import { Helmet } from 'react-helmet'
import favicon from "../images/icons/favicon.ico"

// markup
const IndexPage = () => {
  
  return (
    <main>

      <Helmet>
        <meta charSet="utf-8" />
        <title>ECP Adoption Dashboard</title>
        <link rel="icon" href={favicon} />
      </Helmet>   

      <Header />

    </main>
  )
}

export default IndexPage
