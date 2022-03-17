import Home from './routes/Home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ErrorPage from './routes/ErrorPage';
import MonsterPage from './routes/MonsterPage';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hyrule's Monsters</h1>
      </header>
      <main>
        <Router>
          <nav>
            <Link to='/BOTWEncyclopedia'>Home</Link>
          </nav>
          <Routes>
            <Route path='/BOTWEncyclopedia' element={<Home />} />
            <Route path='/BOTWEncyclopedia/monster/:id' element={<MonsterPage />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
