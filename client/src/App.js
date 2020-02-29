import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/navbar";
import Login from "./components/login";
import Card from "./components/card";
<<<<<<< HEAD

import "bootstrap/dist/css/bootstrap.min.css";
=======
import Settings from "./pages/NewUS";
import Profile from "./pages/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/signup";
import dashboard from "./pages/dashboard";
>>>>>>> 452d966c00f848a2d7c67b7a12f897d457564aa7

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/card" component={Card} />
<<<<<<< HEAD
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
=======
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/userprofile" component={Profile} />
          <Route exact path="/dashboard" component={dashboard} />
>>>>>>> 452d966c00f848a2d7c67b7a12f897d457564aa7
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
