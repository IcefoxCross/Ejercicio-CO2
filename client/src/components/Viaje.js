import React from 'react';
import './viaje.css';

const Viaje = ({viaje, index}) => {

    const fecha = viaje.fecha.substring(0, 10);
    return(
        <tr>
            <td>{index+1}</td>
            <td>{fecha}</td>
            <td>{viaje.direccion_partida}</td>
            <td>{viaje.direccion_termino}</td>
            <td>{viaje.kilometros}</td>
            <td>{viaje.medio_transporte}</td>
            <td>{viaje.numero_personas}</td>
            <td>{viaje.ida_vuelta ? 'Verdadero' : 'Falso'}</td>
            <td>{viaje.kg_co2.toFixed(3)}</td>
        </tr>
    )
}

export default Viaje;