import React, { Component } from "react";

import UserDisplay from "../UserDisplay";
import RetrieveUser from "../RetrieveUser";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Service Redux Example</h1>
          <p>Test the Service-Redux Pattern</p>
        </header>
        <section>
          <RetrieveUser />
          <UserDisplay />
        </section>
      </div>
    );
  }
}

export default App;
