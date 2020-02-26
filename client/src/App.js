import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImgCard from './components/card';
import login from './components/login';
import Nav from './components/navbar';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={ImgCard} />
        <Route path="/login" component={login} />
      </Switch>
    </Router>
  );
}

export default App;
