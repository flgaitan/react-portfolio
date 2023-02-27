import React from 'react'

function Portfolio({title, imageUrl, body}) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src='{imageUrl}' alt='' />
      </div>
      <div className='card-title'>
        <h2>{title}</h2>
      </div>
      <div className='card-body'>
        <p>{body}</p>
      </div>
      </div>
  )
}

export default Portfolio