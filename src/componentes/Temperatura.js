import React, { Fragment } from 'react';

const Temperatura = () => {
    const temperatura = 21;

    return (
        <Fragment>
        <h2>Frío o calor?</h2>
        <h4>
            {
                temperatura > 20 ? "Hace calor" :"Hace frío"
            }
        </h4>
    </Fragment>
    )
}

export default Temperatura;