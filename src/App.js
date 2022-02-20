import Axios from 'axios';
import { useEffect, useState } from 'react';
import Monster from './components/Monster';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    loadData();
  }, [])
  
  const loadData = () => {
    Axios.get("https://botw-compendium.herokuapp.com/api/v2/category/monsters").then((response) => {
      setMonsters(response.data.data);
      setIsLoading(false);
    })
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.includes(searchWord.toLowerCase());
  })

  if(isLoading){
    return (
      <div className='App'>
        <header>
          <h1>Hyrule's Monsters</h1>
          <h3>Now loading...</h3>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Hyrule's Monsters</h1>
        <input 
          type='text' 
          placeholder='Type a monster' 
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </header>
      <section>
        {filteredMonsters.map((monster) => {
          return (
            <Monster 
              name={monster.name} 
              image={monster.image} 
              description={monster.description}
              key={monster.id}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
