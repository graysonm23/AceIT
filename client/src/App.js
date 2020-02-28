<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImgCard from './components/card';
import login from './components/login';
import Nav from './components/navbar';
=======
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/NewUS";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/navbar";
import Card from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 72b01406927f6754ad37a2e15c24b215b686125c

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={ImgCard} />
        <Route path="/login" component={login} />
      </Switch>
=======
      <div>
        <Nav />
        <Switch>
          <Route exact path="/card" component={Card} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
>>>>>>> 72b01406927f6754ad37a2e15c24b215b686125c
    </Router>
  );
}

export default App;
