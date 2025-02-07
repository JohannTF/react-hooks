import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ContadorHooks(props) {
    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador+1);
    const restar = () => setContador(contador-1);
    return(
        <>
        <h2>Hooks - useState - Contador de {props.titulo}</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        </>
    );
}
ContadorHooks.defaultProps = {
    titulo: "clicks"
}
// Estoy creando una nueva propiedad a la función ContadorHooks, la cual
// Asigna un tipo de dato especifico para numero
ContadorHooks.propTypes = {
    titulo: PropTypes.string/*.isRequried Me inidica que si o si le tengo que pasar ese attribute*/
}