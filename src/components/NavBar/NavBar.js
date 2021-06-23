import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter, Link, Router, Switch } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <ul className="menu-bar">
                <li>INICIO</li>
                <li>CATEGORIAS</li>
                <li>CONTACTO</li>
                <li>FAQ</li>
                <li><CartWidget /></li>
            </ul>
        );
    }
}


const NavBar2 = () => {
    return (
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Ontec Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Procesador</Nav.Link>
                    <Nav.Link href="#pricing">Memoria RAM</Nav.Link>
                    <Nav.Link href=""><CartWidget/></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
            </Navbar>
            <br />
        </BrowserRouter>
    );
};

export default NavBar;