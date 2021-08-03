import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
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
                    <Link className="link" to="/categories/procesadores">
                        PROCESADORES
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/categories/memoria_ram">
                        MEMORIAS RAM
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/categories/discos_duros">
                        DISCOS DUROS
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/categories/monitores">
                        MONITORES
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
