import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import viajesService from './services/viajes';
import Header from './components/Header';
import ViajesList from './components/ViajesList';
import ViajesForm from './components/ViajesForm';

const App = () => {

  const [viajes, setViajes] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    viajesService.getAll().then(initialViajes => {
      setViajes(initialViajes);
    });
  }, []);

  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ViajesList viajes={viajes} />
        </Route>
        <Route exact path="/lista">
          <ViajesList viajes={viajes} />
        </Route>
        <Route exact path="/nuevo">
          <ViajesForm />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
