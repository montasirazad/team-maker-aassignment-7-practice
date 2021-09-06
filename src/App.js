import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import fakeData from '../src/Fake Data/fakeData.json'
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';


function App() {
  const [players, setPlayers] = useState([])
  const [cart, setCart] = useState([])
  // console.log(players)

  useEffect(() => {
    setPlayers(fakeData)

  }, [])

  const addPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart)
    document.getElementById('test').style.display ='block';

  }



  return (
    <div className='app' >



      <div className='main' >
        {
          players.map(player => <Shop addPlayer={addPlayer} key={player.id} player={player}> </Shop>)
        }
      </div>

      <div id='test' >
        <Cart cart={cart}>  </Cart>
      </div>

    </div>
  );
}

export default App;
