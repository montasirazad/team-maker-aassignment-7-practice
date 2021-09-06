 import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import fakeData  from '../src/Fake Data/fakeData.json'
import Shop from './Components/Shop/Shop';
function App() {
  const [players , setPlayers ] = useState([])
  console.log(players)
  
  useEffect(()=>{
    setPlayers(fakeData)
    
  },[])

  return (
    <div className='main' >
             {
               players.map(player => <Shop key={player.id} player={player}> </Shop>)
             }
       
    </div>
  );
}

export default App;
