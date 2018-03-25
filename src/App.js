import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import createBackend from "./createGistBackend";
import increment from "./increment";
import counterValue from "./counterValue";

class App extends Component {
  state = {
    counter: 0
  };

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.backend = createBackend(this.state.login, this.state.password);
    counterValue(this.backend).then(value => {
      this.setState({ counter: value });
      alert("Connected");
    });
  };

  increment = () => {
    if (!this.backend) {
      alert("Not connected");
      return;
    }
    increment(this.backend)
      .then(() => counterValue(this.backend))
      .then(value => {
        this.setState({ counter: value });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gist as a backend</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Github's Login:
              <input
                type="text"
                value={this.state.login}
                onChange={this.handleLoginChange}
              />
            </label>
          </div>
          <div>
            <label>
              Github's Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <p className="App-intro">
          <span>
            Counter value : <b>{this.state.counter}</b>
          </span>
        </p>
        <p className="App-intro">
          <button onClick={this.increment}>INCREMENT</button>
        </p>
      </div>
    );
  }
}

export default App;
