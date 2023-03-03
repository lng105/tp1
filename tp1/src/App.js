import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainNav from './Shared/Nav/MainNav';

function App() {
  return (
    <Router>
        <MainNav />
        <main>

        </main>
    </Router>
  );
}

export default App;
