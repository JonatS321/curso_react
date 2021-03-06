import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import Home from "./views/Home/Home";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import Category from "./views/Category/Category";
import CartContainer from "./views/CartContainer/CartContainer";
import OrderView from "./views/OrderView/OrderView";
import { CartProvider } from "./context/CartContext";

class App extends Component {
    render() {
        return (
            <CartProvider>
                <Router>
                    <div className="App">
                        <Header />
                        <NavBar />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route
                                path="/categories/:id"
                                component={Category}
                            />
                            <Route
                                path="/item/:id"
                                exact
                                component={ItemDetailContainer}
                            />
                            <Route path="/cart" component={CartContainer} />
                            <Route path="/order" component={OrderView} />
                        </Switch>
                    </div>
                </Router>
            </CartProvider>
        );
    }
}

export default App;
