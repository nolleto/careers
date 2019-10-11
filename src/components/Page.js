import React from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from './GlobalStyle'

const Page = ({ children }) => (
  <>
    <Helmet defer={false}>
      <link
        href='https://fonts.googleapis.com/css?family=Dosis:400,500,600,700|Open+Sans:400,600,700&display=swap'
        rel='stylesheet'
      />
    </Helmet>

    <GlobalStyle />

    {children}
  </>
)

export default Page
