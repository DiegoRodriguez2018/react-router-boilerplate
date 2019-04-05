import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./stylesheets/App.css";
import PageNotFound from "./pages/PageNotFound";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
