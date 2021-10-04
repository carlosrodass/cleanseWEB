import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { match } from './Config/match.routes';
import Navegation from './Components/navegation';


function App() {

  return (
    <Router>
      {/* Hacer que se muestre si el login es success y sino no mostrar la navbar */}
      <Navegation />
      <Switch>
        {match.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={route.component}
            />
          )

        })}
      </Switch>
    </Router>
  );
}

export default App;
