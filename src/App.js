import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './Config/routes';
import Navegation from './Components/navegation';
// import { Register, Login, Home, Offer, Profile } from './Pages/index';


function App() {

  return (
    <Router>
      <Navegation /> {/* Hacer que se muestre si el login es success y sino no mostrar la navbar */}
      <Switch>
        {routes.map((route, index) => {
          <Route
            key={index}
            path={route.path}
            component={route.component}
          />
        })}
      </Switch>
    </Router>
  );
}

export default App;
