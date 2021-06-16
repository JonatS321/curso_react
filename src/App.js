import React, { Component, Fragment } from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

class App extends Component {
  render() {
    return (
     <Fragment>
        <div className="App">
          <h1>NOTEC STORE</h1>
        </div>
      <NavBar/>
      <ItemListContainer/>
     </Fragment>
      )
  }
}

export default App;
