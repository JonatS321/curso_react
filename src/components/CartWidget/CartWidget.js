import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

//class CartWidget extends React.Component{
//
//    render(){
//        return (
//            <Link to="/cart"><FontAwesomeIcon icon={faCartPlus}/></Link>
//        )
//    }
//}
//
//export default CartWidget

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
                    {totalItems()} <FontAwesomeIcon icon={faCartPlus} />{" "}
                </span>
            )}
        </>
    );
};

export default CartWidget;

//{emptyCart() ? null : <FontAwesomeIcon icon={faCartPlus} /> + <div>qweq</div>}
