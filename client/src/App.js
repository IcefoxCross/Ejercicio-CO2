import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import viajesService from './services/viajes';
import Header from './components/Header';
import ViajesList from './components/ViajesList';
import ViajesForm from './components/ViajesForm';
import Alerta from './components/Alerta';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [viajes, setViajes] = useState([]);
  const [mensaje, setMensaje] = useState(null);
  const [esError, setEsError] = useState(false);

  useEffect(() => {
    viajesService.getAll().then(initialViajes => {
      setViajes(initialViajes);
    });
  }, []);

  const addViaje = (direccionPartida, direccionTermino, medioTransporte, kilometros, personas, idaVuelta) => {
    const newViaje = {
      direccion_partida: direccionPartida,
      direccion_termino: direccionTermino,
      medio_transporte: medioTransporte,
      kilometros: kilometros,
      numero_personas: personas,
      ida_vuelta: idaVuelta
    };

    viajesService.create(newViaje).then(returnedViaje => {
      setViajes(viajes.concat(returnedViaje));
      setMensaje('Se agrego el Viaje con éxito.');
      setEsError(false);
      setTimeout(() => {setMensaje(null)}, 3000);
    });
  };

  const handleNewViaje = (direccionPartida, direccionTermino, medioTransporte, kilometros, personas, idaVuelta) => {
    const viaje = viajes.find(v => v.direccion_partida === direccionPartida && v.direccion_termino === direccionTermino
      && v.medio_transporte === medioTransporte && v.kilometros == kilometros && v.numero_personas == personas
      && v.ida_vuelta === idaVuelta);
      if (typeof viaje === 'undefined') {
        addViaje(direccionPartida, direccionTermino, medioTransporte, kilometros, personas, idaVuelta);
      } else {
        setMensaje('El Viaje ya fue agregado anteriormente.');
        setEsError(true);
        setTimeout(() => {setMensaje(null)}, 3000);
      }
  };

  return(
    <Router>
      <Header />
      <Alerta mensaje={mensaje} esError={esError} />
      <Switch>
        <Route exact path="/">
          <ViajesList viajes={viajes} />
        </Route>
        <Route exact path="/lista">
          <ViajesList viajes={viajes} />
        </Route>
        <Route exact path="/nuevo">
          <ViajesForm handleNewViaje={handleNewViaje} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
