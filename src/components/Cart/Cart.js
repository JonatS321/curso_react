import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

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
        emptyCart,
    ] = useContext(CartContext);

    return (
        <>
            {emptyCart() === true ? (
                <>
                    <div>CARRITO VACIO</div>
                    <Link to="/">
                        <Button>VOLVER AL INICIO</Button>
                    </Link>
                </>
            ) : (
                <div>
                    <ListGroup>
                        {cartItems.map((item) => (
                            <ListGroupItem>
                                {item.dataItem.title} ${item.dataItem.price}
                                CANTIDAD: {item.quantity}{" "}
                                <Button
                                    onClick={() => removeItem(item.dataItem.id)}
                                >
                                    ELIMINAR ITEM
                                </Button>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    <Button><Link to="/order">FINALIZAR COMPRA</Link></Button>
                </div>
            )}
        </>
    );
};

export default Cart;
