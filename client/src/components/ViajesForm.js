import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const ViajesForm = ({handleNewViaje}) => {

    const [direccionPartida, setDireccionPartida] = useState('');
    const [direccionTermino, setDireccionTermino] = useState('');
    const [medioTransporte, setMedioTransporte] = useState('Metro (Tren, Subway, Subterráneo)');
    const [kilometros, setKilometros] = useState(0);
    const [personas, setPersonas] = useState(0);
    const [idaVuelta, setIdaVuelta] = useState(false);

    const handleDireccionPartida = (event) => {
        setDireccionPartida(event.target.value);
    };
    const handleDireccionTermino = (event) => {
        setDireccionTermino(event.target.value);
    };
    const handleMedioTransporte = (event) => {
        setMedioTransporte(event.target.value);
    };
    const handleKilometros = (event) => {
        setKilometros(event.target.value);
    };
    const handlePersonas = (event) => {
        setPersonas(event.target.value);
    };
    const handleIdaVuelta = (event) => {
        setIdaVuelta(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleNewViaje(direccionPartida, direccionTermino, medioTransporte, kilometros, personas, idaVuelta);
    };

    return(
        <Container>
            <h1>Nuevo Viaje</h1>
            <Row className="justify-content-md-center">
                <Col xs>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Punto de Inicio:</Form.Label>
                            <Form.Control required type="text" value={direccionPartida} onChange={handleDireccionPartida} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Punto de Termino:</Form.Label>
                            <Form.Control required type="text" value={direccionTermino} onChange={handleDireccionTermino} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Medio de Transporte:</Form.Label>
                            <Form.Control required as="select" value={medioTransporte} onChange={handleMedioTransporte}>
                                <option value="Metro (Tren, Subway, Subterráneo)">Metro (Tren, Subway, Subterráneo)</option>
                                <option value="Auto (Gasolina)">Auto (Gasolina)</option>
                                <option value="Camioneta (Diésel)">Camioneta (Diésel)</option>
                                <option value="Motocicleta (Gasolina)">Motocicleta (Gasolina)</option>
                                <option value="Bus Transantiago (Transporte público)">Bus Transantiago (Transporte público)</option>
                                <option value="Bus (Vehículo privado)">Bus (Vehículo privado)</option>
                                <option value="Avión (Chile)">Avión (Chile)</option>
                                <option value="Avión (Internacional)">Avión (Internacional)</option>
                                <option value="Caminando">Caminando</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Kilometros:</Form.Label>
                            <Form.Control type="number" min="1" value={kilometros} onChange={handleKilometros} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Numero de Trabajadores:</Form.Label>
                            <Form.Control type="number" min="1" value={personas} onChange={handlePersonas} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Check type="checkbox" label="El viaje es Ida y Vuelta?" value={idaVuelta} onChange={handleIdaVuelta} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Agregar Viaje</Button>
                    </Form>
                </Col>
                <Col xs >
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Medio de Transporte</th>
                            <th>Factor Emisión [kgCO2/km]</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Metro (Tren, Subway, Subterráneo)</td>
                            <td>0.033</td>
                        </tr>
                        <tr>
                            <td>Auto (Gasolina)</td>
                            <td>0.21</td>
                        </tr>
                        <tr>
                            <td>Camioneta (Diésel)</td>
                            <td>0.249</td>
                        </tr>
                        <tr>
                            <td>Motocicleta (Gasolina)</td>
                            <td>0.092</td>
                        </tr>
                        <tr>
                            <td>Bus Transantiago (Transporte público)</td>
                            <td>0.039</td>
                        </tr>
                        <tr>
                            <td>Bus (Vehículo privado)</td>
                            <td>0.012</td>
                        </tr>
                        <tr>
                            <td>Avión (Chile)</td>
                            <td>0.279</td>
                        </tr>
                        <tr>
                            <td>Avión (Internacional)</td>
                            <td>0.179</td>
                        </tr>
                        <tr>
                            <td>Caminando</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ViajesForm;