import React, { useContext, useState } from "react";
import { db } from "../../firebase";
import { CartContext } from "../../context/CartContext";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase/app";

import "firebase/firestore";

const OrderForm = () => {
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
        getResumeCart,
    ] = useContext(CartContext);

    const initialOrder = {
        items: [],
        buyer: [],
        date: "",
        total: "",
    };

    const [newBuyer, setNewBuyer] = useState([]);
    const [order, setOrder] = useState(initialOrder);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setOrder({
            ...order,
            items: getResumeCart(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice(),
            buyer: newBuyer,
        });
        console.log(order);
        await db
            .collection("orders")
            .add(order)
            .then((docRef) => {
                alert("ID DE NUMERO DE COMPRA: " + docRef.id);
            });
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setNewBuyer({ ...newBuyer, [name]: value });
    };

    const vieww = () => {
        setOrder({
            ...order,
            items: getResumeCart(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice(),
            buyer: newBuyer,
        });
        console.log(order);
    };

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        onChange={handleOnChange}
                        value={order.name}
                    />
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Apellido"
                        name="lastName"
                        onChange={handleOnChange}
                        value={order.lastname}
                    />
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Telefono fijo o celular"
                        name="phone"
                        onChange={handleOnChange}
                        value={order.phone}
                    />
                    <Form.Label>Direccion email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleOnChange}
                        value={order.email}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    FINALIZAR PEDIDO
                </Button>
                <Button onClick={vieww}>VER ORDEN</Button>
            </Form>
        </div>
    );
};

export default OrderForm;

//const handleOnSubmit = async (e) => {
//    e.preventDefault();
//    setOrder({
//        ...order,
//        items: cartItems,
//        date: firebase.firestore.Timestamp.fromDate(new Date()),
//        total: totalPrice(),
//        buyer: newBuyer,
//    });
//    await db.collection("orders").doc().set(order);
//    setOrder({ ...initialOrder });
//    setNewBuyer([])
//};
