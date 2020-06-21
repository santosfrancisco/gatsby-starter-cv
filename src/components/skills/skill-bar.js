import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level animate-on-scroll'></div>
      </div>
    </div>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  width: 100%;
  .skill__bar {
    width: 100%;
    height: 10px;
    background-color: lightgrey;
    padding: 1px;
  }
  .skill__level {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 0;
    height: 8px;

    &.is-visible {
      transition: width .5s ease-in;
      width: ${p => p.level || 0}%;
    }
  }
`
