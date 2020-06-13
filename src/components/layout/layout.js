import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { ResetCSS, GlobalStyle } from '../styles'
import Header from '../header'
import Footer from '../footer'

const variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const Layout = ({ children, location }) => (
  <React.Fragment>
    <ResetCSS />
    <GlobalStyle />
    <Header location={location} />
    <motion.main
      key={location}
      variants={variants}
      initial="initial"
      animate="enter"
    >
      {children}
    </motion.main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}


export default Layout