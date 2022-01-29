import { BrowserRouter as Route, Router} from 'react-router-dom';
import Home from "./routes/Home";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [monsters, setMonsters] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, [])
  
  const loadData = () => {
    axios.get("https://botw-compendium.herokuapp.com/api/v2/all").then((response) => {
      console.log(response);
      setMonsters(response.data.data.creatures.food);
      setIsLoading(false);
      console.log(monsters);
    })
  }


  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {monsters.map((monster) => {
        return(
          <h2>{monster.name}</h2>
        )
      })}
    </div>
  );
}

export default App;
