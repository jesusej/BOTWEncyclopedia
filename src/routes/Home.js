import Axios from 'axios';
import { useEffect, useState } from 'react';
import Monster from './../components/Monster';

function Home() {
  
  const [monsters, setMonsters] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    loadData();
  }, [])
  
  const loadData = () => {
    Axios.get("https://botw-compendium.herokuapp.com/api/v2/category/monsters").then((response) => {
      setMonsters(response.data.data);
    })
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.includes(searchWord.toLowerCase());
  })

  filteredMonsters.sort((a, b) => {
    return a.id - b.id;
  })

  if(monsters.length < 1){
    return (
      <div className='Home'>
        <h3>Now loading...</h3>
      </div>
    );
  }

  return (
    <div className="Home">
      <input 
        type='text' 
        placeholder='Type a monster' 
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <section>
        {filteredMonsters.map((monster) => {
          return (
            <Monster 
              name={monster.name} 
              image={monster.image}
              id={monster.id}
              key={monster.id}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Home;
