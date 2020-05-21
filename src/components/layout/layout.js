import React from 'react'
import PropTypes from 'prop-types'
import { ResetCSS, GlobalStyle } from '../styles'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children, location }) => (
  <React.Fragment>
    <ResetCSS />
    <GlobalStyle />
    <Header location={location} />
    <div>{children}</div>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout