import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import fakeData from '../src/Fake Data/fakeData.json'
import Shop from './Components/Shop/Shop';
function App() {
  const [players, setPlayers] = useState([])
  // console.log(players)

  useEffect(() => {
    setPlayers(fakeData)

  }, [])

  const addPlayer =(player) => {
    console.log( player)
  }

  return (
    <div >

      <h1>Create your team</h1>

      <div className='main' >
        {
          players.map(player => <Shop addPlayer={addPlayer} key={player.id} player={player}> </Shop>)
        }
      </div>


    </div>
  );
}

export default App;
