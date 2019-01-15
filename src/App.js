import React, { Component } from "react";
import Home from "./pages/Home";
import Header from "./components/Navigation";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="container mt-4">
          <Home />
        </section>
      </div>
    );
  }
}
