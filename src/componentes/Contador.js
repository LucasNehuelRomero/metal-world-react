import React, {useState, Fragment} from 'react'; // El fragment funciona como una etiqueta div, por eso mas abajo encasillamos todo del return dentro de este.

const Contador = () => {
    
const [numero, setNumero] = useState(1); //Para modificar el numero es necesario el "setNumero" dentro de los corchetes.

const aumentar = () => {
    console.log('Me diste un click')
    setNumero(numero+1)
}
//---------------------------De return en adelante es material que visualizamos en el HTML. Lo que está antes, son las declaraciones de funciones, las constantes.   
    return (
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button> 
        </Fragment>
    );
}

export default Contador;