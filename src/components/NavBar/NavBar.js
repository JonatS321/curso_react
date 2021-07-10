import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
//import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <ul className="menuBar">
                <li>
                    <Link className="link" to="/">INICIO</Link>
                </li>
                <li>
                    <Link className="link" to="/category/procesadores">PROCESADORES</Link>
                </li>
                <li>
                    <Link className="link" to="/category/memoria_ram">MEMORIAS RAM</Link>
                </li>
                <li>
                    <Link className="link" to="/category/discos_duros">DISCOS DUROS</Link>
                </li>
                <li>
                    <Link className="link" to="/category/monitores">MONITORES</Link>
                </li>
                <li>
                    <Link className="link" to="/cart">
                        <CartWidget />
                    </Link>
                </li>
            </ul>
        );
    }
}

//const NavBar2 = () => {
//    return (
//        <BrowserRouter>
//            <Navbar bg="dark" variant="dark">
//                <Navbar.Brand href="#home">Ontec Store</Navbar.Brand>
//                <Nav className="mr-auto">
//                    <Nav.Link href="#home">Home</Nav.Link>
//                    <Nav.Link href="#features">Procesador</Nav.Link>
//                    <Nav.Link href="#pricing">Memoria RAM</Nav.Link>
//                    <Nav.Link href=""><CartWidget/></Nav.Link>
//                </Nav>
//                <Form inline>
//                    <FormControl
//                        type="text"
//                        placeholder="Search"
//                        className="mr-sm-2"
//                    />
//                    <Button variant="outline-info">Buscar</Button>
//                </Form>
//            </Navbar>
//            <br />
//        </BrowserRouter>
//    );
//};

export default NavBar;
