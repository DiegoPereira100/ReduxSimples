import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Interval from './components/Interval';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState(50)
  const [max, setMax] = useState(100)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>

      <Interval min={min} max={max}
        onMinChanged={setMin} onMaxChanged={setMax}></Interval>

      </div>
      <div className='linha'>

      <Media min={min} max={max}></Media>
      <Soma min={min} max={max}></Soma>
      <Sorteio min={min} max={max}></Sorteio>

      </div>
    </div>
  );
}

export default App;
