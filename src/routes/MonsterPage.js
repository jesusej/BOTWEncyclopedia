import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

import DynamicTable from '../components/DynamicTable';

function MonsterPage() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [monster, setMonster] = useState(null);

  useEffect(() => {
    loadEntry();
  })
  
  const loadEntry = () => {
    Axios.get(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`).then((response) => {
      setMonster(response.data.data);
      setLoading(false);
    })
  }

  if (monster) {
    return (
      <article>
        <h2>{monster.name.charAt(0).toUpperCase() + monster.name.slice(1)} </h2>
        <div className='content'>
          <img src={monster.image} alt={monster.name} />
          <div className='about'>
            <h3>About {monster.name}</h3>
            <p>{monster.description}</p>
          </div>
          <div className='commonLocations'>
            {((monster.common_locations) && (monster.common_locations > 0)) && <DynamicTable 
              title="Common locations"
              array={monster.common_locations}
            />}
          </div>
          <div className='drops'>
            {((monster.drops) && (monster.drops.length > 0)) && <DynamicTable 
              title="Drops"
              array={monster.drops}
            />}
          </div>
        </div>
      </article>
    );
  }

  if(loading){
    <h2>Now loading...</h2>
  }

  return (
    null
  );
}

export default MonsterPage;