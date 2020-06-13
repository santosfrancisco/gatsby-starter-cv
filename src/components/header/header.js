import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FaGithub } from "react-icons/fa"
import siteConfig from '../../../data/siteConfig'
import { withPrefix } from "gatsby"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303B;
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
  background-color: #25303B;
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
const GithubLink = styled(({ className }) => (
  <a 
    className={className}
    href={`https://github.com/${siteConfig.githubUsername}`}
    target='_blank'
    rel="noopener noreferrer"
  >
    <FaGithub size={32} />
  </a>
))`
  position: relative;
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
`

const Header = ({ location }) => {
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
        <GithubLink />
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header