/*
name
image
description
*/

import React from 'react'

function Monster({name, image, description}) {
  return (
    <article className='monster'>
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)} </h2>
      <img src={image} alt={name} />
      <p>{description} </p>
    </article>
  )
}

export default Monster