import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget"

class NavBar extends React.Component{
    
    render(){
        return (
            <ul className="menu-bar">
                <li>INICIO</li>
                <li>CATEGORIAS</li>
                <li>CONTACTO</li>
                <li>FAQ</li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        );
    }
}

export default NavBar;