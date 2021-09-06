 import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import fakeData  from '../src/Fake Data/fakeData.json'
function App() {
  const [player , setPlayer ] = useState([])
  console.log(player)
  
  useEffect(()=>{
    setPlayer(fakeData)
    
  },[])
  return (
    <div  >

       
    </div>
  );
}

export default App;
