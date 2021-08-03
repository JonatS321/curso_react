import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (dataItem, quantity) => {
        console.log(dataItem, quantity);
        if (isInCart(dataItem.id)) {
            console.log("ITEM REPETIDO");
            let indexItem = cartItems.findIndex(
                (item) => item.dataItem.id === dataItem.id
            );
            cartItems[indexItem].quantity =
                cartItems[indexItem].quantity + quantity;
        } else {
            console.log("ITEM ID: " + dataItem.id);
            setCartItems([...cartItems, { dataItem, quantity }]);
            console.log("ITEM AGREGADO");
        }
        console.log(cartItems);
    };

    const removeItem = (itemId) => {
        const itemsClean = cartItems.filter(
            (itemInCar) => itemInCar.dataItem.id !== itemId
        );
        setCartItems(itemsClean);
        console.log(itemsClean);
        console.log("SE ELIMINO ITEM");
    };

    const clear = () => {
        setCartItems([]);
        console.log("SE VACIO CARRITO");
        console.log(cartItems);
    };

    const isInCart = (itemId) => {
        let filterArrayLength = cartItems.filter(
            (itemInCar) => itemInCar.dataItem.id === itemId
        ).length;
        return filterArrayLength === 0 ? false : true;
    };

    const totalPrice = () => {
        let result = 0;
        cartItems.map(
            (cartItem) =>
                (result += cartItem.dataItem.price * cartItem.quantity)
        );
        return result;
    };

    const totalItems = () => {
        let result = 0;
        cartItems.map((cartItem) => (result += cartItem.quantity));
        return result;
    };

    const emptyCart = () => {
        if (cartItems.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    const getResumeCart = () => {

        return cartItems.map((item) => ({
            title: item.dataItem.title,
            price: item.dataItem.price,
            id: item.dataItem.id,
        }));
    };

    return (
        <CartContext.Provider
            value={[
                cartItems,
                setCartItems,
                addItem,
                removeItem,
                clear,
                isInCart,
                totalPrice,
                totalItems,
                emptyCart,
                getResumeCart,
            ]}
        >
            {props.children}
        </CartContext.Provider>
    );
};
