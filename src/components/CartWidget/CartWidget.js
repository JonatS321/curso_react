import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    // NO ENTIENDO PORQUE CUANDO PASO SOLO LAS FUNCIONES/DATOS QUE NECESITO, SE ROMPE TODO
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
            {emptyCart() === true ? null : (
                <span>
                    {totalItems()} <FontAwesomeIcon icon={faCartPlus} />
                </span>
            )}
        </>
    );
};

export default CartWidget;

