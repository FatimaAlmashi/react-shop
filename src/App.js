
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import OrderList from './Components/Order/OrderList'

class App extends Component {
  render() {
    return (
     <div className="container">
      <Home />
      <OrderList/>
       
      


      </div>
    );
  }
}

export default App;
