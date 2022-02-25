import React from 'react'
import { useNavigate } from 'react-router-dom'

function Monster({name, image, id}) {
  let navigate = useNavigate();

  return (
    <button className='monster' onClick={() => {navigate(`/BOTWEncyclopedia/monster/${id}`)}}>
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)} </h2>
      <img src={image} alt={name} />
    </button>
  )
}

export default Monster