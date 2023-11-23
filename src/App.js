
import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      {/*setting the FIFA player cards heading.*/}
        <h1>Football Player Roster</h1>
      {/*import of the PlayerList component*/}
        <PlayersList/>
    </div>
  );
}

export default App;
