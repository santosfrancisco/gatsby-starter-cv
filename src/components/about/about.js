import React from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    <a href="gatsby-starter-cv/static/images/cv aggiornato 2020.pdf" download><i class="fas fa-download"></i></a>
    </div>
    
  )
}
