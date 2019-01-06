import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
