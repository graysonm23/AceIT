import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/navbar";
import Login from "./components/login";
import Card from "./components/card";
import Settings from "./pages/NewUS";
import Profile from "./pages/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/signup";
import Landing from "./pages/Landing";
// import dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route exact path="/dashboard" component={dashboard} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cards" component={Card} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
