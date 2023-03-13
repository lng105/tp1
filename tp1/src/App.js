import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import MainNav from './Shared/Nav/MainNav';
import Accueil from './Accueil/Accueil';
import Cours from './Cour/Cours'
import Profs from './Professeur/Profs'
import Inscription from './Cour/Inscription';


function App() {
  return (
    <Router>
        <MainNav />
        <main>
          <Switch>
            <Route path="/" exact>
              <Accueil />
            </Route>
            <Route path="/Cours">
              <Cours />
            </Route>
            <Route path="/:coursId/Inscription">
              <Inscription />
            </Route>
            <Route path="/Profs">
              <Profs />
            </Route>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
