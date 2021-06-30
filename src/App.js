import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import Home from "./views/Home/Home";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import Category from "./views/Category/Category"
import CartContainer from "./views/CartContainer/CartContainer"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/category/:id" component={Category} />
                        <Route path="/item/:id" exact component={ItemDetailContainer} />
                        <Route path="/cart" component={CartContainer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
