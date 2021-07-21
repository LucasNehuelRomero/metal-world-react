import React from 'react';
import Contador from './componentes/Contador';
import Temperatura from './componentes/Temperatura';
import Lista from './componentes/Lista';
import './App.css';


function App() {
  return (
    <div className="App-container">
       <h1>MetalWorld</h1>
       <Contador />
       <Temperatura />
       <Lista />
    </div>
  );
}

export default App;
