import React from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    <a href="gatsby-starter-cv/static/images/cv aggiornato 2020.pdf" download> <img src="https://raw.githubusercontent.com/gallinaro/gatsby-starter-cv/master/static/images/download_img.png" width="104" height="142"></a>
    </div>
    
  )
}
