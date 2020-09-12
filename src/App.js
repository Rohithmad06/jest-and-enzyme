import React, { Component } from "react";
import logo from "./logo.svg";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false,
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="increment-content">
          The current count is {this.state.counter}
        </h1>
        {this.state.error && (
          <h1 data-test="error-content" style={{ color: "red" }}>
            Count cannot be less than 0
          </h1>
        )}
        <button
          onClick={() => {
            this.setState({ error: false, counter: this.state.counter + 1 });
          }}
          data-test="increment-button"
        >
          Click me
        </button>
        <button
          onClick={() => {
            const counter = this.state.counter;
            if (this.state.counter > 0) {
              this.setState({
                ...this.state,
                counter: this.state.counter - 1,
              });
            } else {
              this.setState({
                ...this.state,
                error: true,
              });
            }
          }}
          data-test="decrement-button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
