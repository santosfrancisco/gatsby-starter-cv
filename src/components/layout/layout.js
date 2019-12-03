import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../../../data/siteConfig'
import { ResetCSS, GlobalStyle } from '../styles'
import Header from '../header'

const Layout = ({ children }) => (
  <React.Fragment>
    <Header headerLinks={siteConfig.headerLinks} />
    <ResetCSS />
    <GlobalStyle />
    <div>{children}</div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
