import React, { createContext, useState } from "react";

// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();

// 2 - CREAR EL COMPONENTE PROVIDER
// 5 - es pasar props dentro del componente Provider
export const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
        //console.log(items.length);
        if (isInCart(item.id) === 0) {
            console.log("ITEM ID: " + item.id);
            setItems([...items, {item, quantity}]);
            console.log("ITEM AGREGADO");
        } else {
            let a = items.filter( itemInCar => itemInCar.item.id === item.id)
            console.log("ACA" + a.quantity)
            console.log("ESTA EN EL CARRITO");
// NO LOGRO ENTRAR A LA CANTIDAD PARA DEL ITEM QUE YA ESTA EN EL CARRITO 
// PARA ELIMINAR EL ITEM QUE YA ESTA Y CREAR UNO NUEVO CON LA SUMA DE CANTIDES.
        }
        //console.log(items.length);
        console.log(items);
    };

    const removeItem = (itemId) => {
        setItems(items.filter((itemInCar) => itemInCar.item.id !== itemId));
    };

    const clear = () => {
        setItems([]);
    };

    const isInCart = (itemId) => {
        //ESTO LO TENGO QUE MODIFICAR PORQUE LO INTENTE HACER CON TRUE/FALSE PERO NO
        //LOGRABA QUE FUNCIONARA
        console.log(items.filter((itemInCar) => itemInCar.item.id === itemId).length)
        return (items.filter((itemInCar) => itemInCar.item.id === itemId).length)
    };

    // 3 Retornar nuestro contexto con un .Provider
    return (
        <CartContext.Provider
            value={[items, setItems, addItem, removeItem, clear]}
        >
            {/* 4 {props.children }*/} {props.children}
        </CartContext.Provider>
    );
};
