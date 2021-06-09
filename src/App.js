import React, { Component, Fragment } from "react";
import './App.css';

class App extends Component {
  render() {
    return (
     <Fragment>
      <h1>NOTEC STORE</h1>
      <ul className="menu-bar">
        <li>INICIO</li>
        <li>CATALOGO</li>
        <li>CONTACTO</li>
        <li>FAQ</li>
      </ul>
     </Fragment>
      )
  }
}

export default App;
