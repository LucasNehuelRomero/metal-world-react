import React, {Fragment,useState} from 'react';

const Formulario = () => {
 
    const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    })
  

    const handleInputChange = (event) => {
    //    console.log(event.target.value)  (Con esta linea de código podemos estar pendientes de lo que esté registrado en el input), básicamente nos va escribiendo en la consola lo que vayamos poniendo en el input.
        setDatos({
            ...datos,   //Los tres puntitos simbolizan que estamos copiando un objeto determinado, en este caso, los datos...
            [event.target.name]: event.target.value//El array significa que va relacionar cada elemento del "nombre", y "apellido", y los va a configurar dentro de Datos.
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault(); //¡IMPORTANTE! Con el .preventDefault evitas el procesamiento automático del formulario.
        console.log(datos.nombre + ' ' + datos.apellido);
    }

    return (
      <Fragment>
        <h1>Formulario</h1>
        <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-3">
                <input placeholder="Ingrese Nombre" 
                className="form-control"
                type="text"
                name="nombre"
                onChange={handleInputChange}/>                
            </div>
            <div className="col-md-3">
                <input placeholder="Ingrese Apellido"
                className="form-control"
                type="text"
                name="apellido"
                onChange={handleInputChange}/>
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
        <h3>{datos.nombre} - {datos.apellido}</h3> {/* Esta linea sirve para que el nombre y el apellido aparezcan en la página. */}
    </Fragment>
    );
}

export default Formulario;