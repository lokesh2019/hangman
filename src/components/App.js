import { Routes, Route, Link } from "react-router-dom";
import '../styles/App.css';
import Game from './Game';
import Help from './Help';

/* Set up two routes for the game: The game itself and help */
function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link className='link-text' to='/'>PLAY GAME</Link>
        <Link className='link-text' to='/help'>HELP</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Game />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
