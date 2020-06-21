import React from "react";
import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import { GoStar, GoRepoForked, GoLinkExternal } from 'react-icons/go'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`


class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading'
    }
  }
  async componentDidMount () {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' })
    }
  }
  render () {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h2>Latest repositories on Github</h2>
        {status === "loading" && <div className='repositories__loader'><Loader /></div>}
        {status === "ready" &&
          this.state.repos && (
            <React.Fragment>
              <div className="repositories__content">
                {this.state.repos.map(repo => (
                  <React.Fragment key={repo.name}>
                    <div className="repositories__repo">
                      <a 
                        className='repositories__repo-link' 
                        href={repo.html_url}
                        target="_blank"
                      >
                        <strong>{repo.name}</strong>
                      </a>
                      <div>{repo.description}</div>
                      <div className="repositories__repo-date">
                        Updated: {new Date(repo.updated_at).toUTCString()}
                      </div>
                      <div className="repositories__repo-star">
                        {repo.fork && <GoRepoForked />}
                        <GoStar /> {repo.stargazers_count}
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
              <div className="repositories_user-link">
                <a 
                  href={`https://github.com/${siteConfig.githubUsername}`}
                  target="_blank"
                >
                  See all my repositories
                  <GoLinkExternal style={{ marginLeft: 8 }} />
                </a>
              </div>
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link,
  .repositories_user-link a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
  }

  .repositories_user-link {
    display: flex;
    justify-content: flex-end;
  }

  .repositories__repo-date {
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 4px;
    }
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.fontColor};
    opacity: .2;
  }

`

