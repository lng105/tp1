import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import MainNav from './Shared/Nav/MainNav';
import Accueil from './Accueil/Accueil';
import Cours from './Cours/Cours'
import Profs from './Professeur/Profs'

function App() {
  return (
    <Router>
        <MainNav />
        <main>
          <Switch>
            <Route path="/" exact>
              <Accueil />
            </Route>
            <Route path="/Cours" exact>
              <Cours />
            </Route>
            <Route path="/Prof">
              <Profs />
            </Route>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
