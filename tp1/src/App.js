import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";
import MainNav from './Shared/Nav/MainNav';
import Accueil from "./Accueil/components/Accueil"
import Cours from './/Cour/components/Cours'
import Profs from './Professeur/components/Profs'
import Inscriptions from './Cour/Inscriptions';


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
              <Inscriptions />
            </Route>
            <Route path="/Profs">
              <Profs />
            </Route>
            <Redirect to="/" />

          </Switch>
        </main>
    </Router>
  );
}

export default App;
