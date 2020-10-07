import React from 'react';
import Viaje from './Viaje';

const ViajesList = ({viajes}) => {
    return(
        <>
            <h1>Lista de Viajes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nro. de Viaje</th>
                        <th>Dia de Viaje</th>
                        <th>Punto de Inicio</th>
                        <th>Punto de Término</th>
                        <th>Kilometros Recorridos</th>
                        <th>Medio de Transporte</th>
                        <th>Personas en el Viaje</th>
                        <th>Ida y Vuelta?</th>
                        <th>kgCO2 por Persona</th>
                    </tr>
                </thead>
                <tbody>
                    {viajes.map((viaje,index) => <Viaje key={index} index={index} viaje={viaje} />)}
                </tbody>
            </table>
        </>
    )
}

export default ViajesList;