import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'

const Timeline = ({ className }) => (
  <div className={className}>
    <h1>Experience</h1>
    {siteConfig.jobs && siteConfig.jobs.map(job => (
      <article 
        key={job.begin.month + job.begin.year} 
        className='timeline__item animate-on-scroll'
      >
        <div className="inner">
          <span className="timeline__date">
            <span className="timeline__month">{job.begin.month}</span>
            <span className="timeline__year">{job.begin.year}</span>
          </span>
          <div className="timeline__card">
            <h2 className='timeline__card-title'>
              {job.company
                ? `${job.occupation} at ${job.company}`
                : `${job.occupation}`} 
              <br />
              <small className='timeline__card-title--small'>
                ({job.duration || 'present'})
              </small>
            </h2>
            <p>{job.description}</p>
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default styled(Timeline)`

  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin: 70px 0 0 -1px;
    width: 1px;
    height: calc(100% - 70px);
    background: ${({ theme }) => theme.colors.primary};
  }
  .timeline__item {
    width: 100%;
    margin: 0 0 20px 0;
    position: relative;
  }
  .timeline__item:after {
    content: '';
    display: block;
    clear: both;
  }
  .timeline__item div.inner {
    width: 100%;
    float: left;
    margin: 85px 0 0 0;
  }
  .timeline__date {
    display: block;
    width: 60px;
    height: 60px;
    padding: 3px 5px;
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0 0 0 -30px;
    border-radius: 100%;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: 0 0 0 7px ${({ theme }) => theme.colors.background};
  }
  .timeline__date span {
    display: block;
    text-align: center;
  }
  .timeline__month {
    font-size: 18px;
    padding-top: 4px;
  }
  .timeline__year {
    font-size: 10px;
  }
  .timeline__card {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transform: translate(-50%);
  }
  .timeline__card-title {
    padding: 15px;
    margin: 0;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 3px 3px 0 0;
    position: relative;
  }
  .timeline__card-title:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 30%;
    width: 10px; 
    height: 10px;
    transform: rotate(-45deg);
  }
  .timeline__item div.inner p {
    padding: 15px;
    margin: 0;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
    border-radius: 0 0 6px 6px;
  }
  .timeline__item:nth-child(2n+2) div.inner {
    float: right;
    .timeline__card {
      transform: translate(50%);
    }
  }
  .timeline__card-title {
    background: ${({ theme }) => theme.colors.primary};
  }
  .timeline__card-title:after {
    background: ${({ theme }) => theme.colors.primary};
  }

  .timeline__card-title--small {
    font-size: 10px;
  }

  .timeline__item.is-visible div.inner {
    .timeline__card {
      transition: transform .8s ease-in;
      transform: translate(0);
    }
  }

  ${p => config(p).media['sm']`
  .timeline__item div.inner {
    width: 40%;
    margin: 5px 0 0 0;
  }

  .timeline__item div.inner h2:after {
    top: 20px;
    left: unset;
    right: -5px;
  }
  .timeline__item:nth-child(2n+2) div.inner h2:after {
    left: -5px;
  }

  `}
`
