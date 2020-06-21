import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { ResetCSS, GlobalStyle, themes } from '../styles'
import Header from '../header'
import Footer from '../footer'
import { useDarkMode } from './useDarkMode'

const variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background}
`

const Layout = ({ children, location }) => {
  const [theme, setTheme] = useDarkMode()
  return (
  <ThemeProvider theme={themes[theme]}>
    <ResetCSS />
    <GlobalStyle />
    <StyledContainer>
      <Header location={location} onChangeTheme={setTheme} theme={theme} />
      <motion.main
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
      >
        {children}
      </motion.main>
      <Footer />
    </StyledContainer>
  </ThemeProvider>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}


export default Layout