import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../data/siteConfig'

const Link = styled(({ className, icon: Icon, ...props }) => (
  <a 
    className={className}
    target='_blank'
    rel="noopener noreferrer"
    {...props}
  >
    <Icon color="#25303B" size={32} />
  </a>
))`
  & + & {
    margin-left: 24px;
  }
`;

const Footer = ({ className }) => {
  const {
    twitter,
    linkedin,
    github,
  } = siteConfig.social
  return (
    <footer className={className}>
      {`© ${new Date().getFullYear()} ${siteConfig.authorName}`}
      <div>
        {github && <Link href={github} icon={FaGithub} />}
        {twitter && <Link href={twitter} icon={FaTwitter} />}
        {linkedin && <Link href={linkedin} icon={FaLinkedin} />}
      </div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px; 
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`;