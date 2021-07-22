import React from 'react';
import Contador from './componentes/Contador';
import Temperatura from './componentes/Temperatura';
import Lista from './componentes/Lista';
import Formulario from './componentes/Formulario';
import './App.css';


function App() {
  return (
    <div className="App-container mt-5">
       <h1>MetalWorld</h1>
       <Contador />
       <Temperatura />
       <Lista />
       <Formulario />
    </div>
  );
}

export default App;
