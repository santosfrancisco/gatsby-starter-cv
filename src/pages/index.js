import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'

import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'

const Layout = loadable(() => import('../components/layout'))

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: .2;
`

const Home = ({ className, location }) => {
  // validate siteConfig settings
  if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
    console.error('WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.');
  }

  const title = siteConfig.siteTitle
  const { keywords } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={siteConfig.siteCover}
        title={title}
      />

      <Wrapper className={className} >
        <Container className="page-content" fluid>
          <Row>
            <Col xs={4} className='avatar'>
              <img
                className='avatar__image'
                src={withPrefix(siteConfig.authorAvatar)}
                alt='user avatar'
              />
              <div className="social">
                {siteConfig.social.github && <a className="social-link github" href={siteConfig.social.github}>
                  <FaGithub className="social-icon" size="32" />
                </a>}
                {siteConfig.social.linkedin && <a className="social-link linkedin" href={siteConfig.social.linkedin}>
                  <FaLinkedin className="social-icon" size="32" />
                </a>}
                {siteConfig.social.twitter && <a className="social-link twitter" href={siteConfig.social.twitter}>
                  <FaTwitter className="social-icon" size="32" />
                </a>}
                {siteConfig.social.email && <a className="social-link email" href={`mailto:${siteConfig.social.email}`}>
                  <FaEnvelope className="social-icon" size="32" />
                </a>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4} sm={4}>
              <About title='About' text={siteConfig.authorDescription}/>
            </Col>
            <Col xs={4} sm={4}>
              <Skills title='Skills' skills={siteConfig.skills} />
            </Col>
          </Row>
          <Separator />
          <Timeline />
          <Separator />
          {siteConfig.githubUsername && <Repositories />}
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
