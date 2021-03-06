import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/navbar";
import Login from "./pages/login";
import Boardeditor from "./pages/boardeditor/boardeditor";
import Settings from "./pages/NewUS";
import Profile from "./pages/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/signup";
import Landing from "./pages/Landing";
import Card from "./pages/board";
import "./css/Cards.css";

function App() {
  return (
    <div className="PageWrapper">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/board" component={Boardeditor} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cards" component={Card} />
          <Route exact path="/" component={Landing} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
