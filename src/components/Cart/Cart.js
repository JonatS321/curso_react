import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Cart = () => {
    //REACOMODANDO EL ORDEN DE CONTEXT PUDE SOLUCIONAR EL ERROR DE QUE SE ME CRUZABAN LAS FUNCIONES
    const [
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalPrice,
        totalItems,
        emptyCart
    ] = useContext(CartContext);

    
    return (
        <>
            {emptyCart() === true ? (
                <Link to="/">CARRITO VACIO</Link>

            ) : (
                <ul>
                    {
                        cartItems.map( item => (<li> {item.dataItem.title} $ {item.dataItem.price}</li>))
                    }
                </ul>
            )}
        </>
    );
};

export default Cart;
