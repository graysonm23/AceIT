import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/NewUS";
import NoMatch from "./Pages/NoMatch";
import Nav from "./components/navbar";
import Card from "./components/card";
import Settings from "./pages/NewUS";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Pages/signup";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/card" component={Card} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />

          <Route exact path="/settings" component={Settings} />
          <Route exact path="/" component={Home} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
