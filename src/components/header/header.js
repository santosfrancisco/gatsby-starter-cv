import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FaGithub } from "react-icons/fa"
import { FiSun, FiMoon } from "react-icons/fi"
import { withPrefix } from "gatsby"
import Switch from 'react-switch'
import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary};
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  a:hover {
    filter: brightness(0.6);
  }
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
` 

const HeaderLink = styled(Link)`
  position: relative;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
  ${({ active }) => active && css`
    pointer-events: none;
    border-bottom: 2px solid #fff;
  `}
`

const StyledSwitch = styled(Switch).attrs(props => ({
  onHandleColor: props.theme.colors.primary,
  offHandleColor: props.theme.colors.primary,
}))`

`

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Header = ({ location, onChangeTheme, theme }) => {
  const { headerLinks } = siteConfig

  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderLinkGroup>
          {headerLinks.map((headerLink, i) => (
            <HeaderLink
              active={location.pathname === withPrefix(headerLink.url)}
              to={headerLink.url}
              key={`header-link-${i}`}
            >
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderLinkGroup>
        {siteConfig.enableDarkmode && <SwitchWrapper >
          <StyledSwitch 
            onChange={onChangeTheme} 
            checked={theme === 'light'}
            onColor="#626262"
            offColor="#212121"
            checkedIcon={<IconWrapper><FiSun color="yellow" /></IconWrapper>}
            uncheckedIcon={<IconWrapper><FiMoon color="white" /></IconWrapper>}
          />
        </SwitchWrapper>}
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header