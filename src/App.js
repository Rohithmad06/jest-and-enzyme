import React, { Component } from "react";
import logo from "./logo.svg";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        <Counter />
      </div>
    );
  }
}

export default App;
