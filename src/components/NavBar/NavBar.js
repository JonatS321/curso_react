import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Authentication from "../Authentication/Authentication";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <ul className="menuBar">
                <li>
                    <Link className="link" to="/">
                        INICIO
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/category/procesadores">
                        PROCESADORES
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/category/memoria_ram">
                        MEMORIAS RAM
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/category/discos_duros">
                        DISCOS DUROS
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/category/monitores">
                        MONITORES
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/login">
                        <Authentication />
                    </Link>
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

export default NavBar;
