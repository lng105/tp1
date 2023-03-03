import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import MainNav from './Shared/Nav/MainNav';
import Accueil from './Accueil/Accueil';

function App() {
  return (
    <Router>
        <MainNav />
        <main>
          <Switch>
            <Route path="/" exact>
              <Accueil />
            </Route>
            <Route>
              
            </Route>
            <Route>
              
            </Route>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
