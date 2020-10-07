import React from 'react';
import Viaje from './Viaje';
import Table from 'react-bootstrap/Table';
import "./viajesList.css";

const ViajesList = ({viajes}) => {
    if (viajes.length > 0) {
        return(
            <>
                <h1>Lista de Viajes</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nro. de Viaje</th>
                            <th>Dia de Viaje</th>
                            <th className="expand">Punto de Inicio</th>
                            <th className="expand">Punto de Término</th>
                            <th>Kilometros Recorridos</th>
                            <th className="expand">Medio de Transporte</th>
                            <th>Personas en el Viaje</th>
                            <th>Ida y Vuelta?</th>
                            <th>kgCO2 por Persona</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viajes.map((viaje,index) => <Viaje key={index} index={index} viaje={viaje} />)}
                    </tbody>
                </Table>
            </>
        )
    } else {
        return(
            <>
                <p>No hay viajes registrados.</p>
            </>
        )
    }
}

export default ViajesList;