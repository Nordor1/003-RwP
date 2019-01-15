import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import About from "./pages/About";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </Router>,
  document.getElementById("root")
);
