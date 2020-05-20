import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../../../data/siteConfig'
import { ResetCSS, GlobalStyle } from '../styles'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => (
  <React.Fragment>
    <ResetCSS />
    <GlobalStyle />
    <Header headerLinks={siteConfig.headerLinks} />
    <div>{children}</div>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout