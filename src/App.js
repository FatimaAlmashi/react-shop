import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Profile />
      </div>
    );
  }
}

export default App;
