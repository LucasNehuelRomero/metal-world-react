import React,{useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4])

    const [numero, setNumero] = useState(5)

    const agregarElemento = () => {
        setNumero(numero + 1)
        console.log('click')
        setArrayNumero([...arrayNumero, 6])
    }
    return (
        <Fragment>
            <h2>Lista</h2>
            <button onCLick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) => //Con el ".map", paseas por cada elemento de la lista ArrayNumero.
                    <p key={index}>{item} - {index}</p> //Con el index pasamos un atributo dentro del parrafo.
                )
            }
        </Fragment>
        
    );
} 

export default Lista;