import React, { useContext, useState } from "react";
import { fb } from "../../firebase";
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
    const db = fb.firestore();

    const [newBuyer, setNewBuyer] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
    });

    const initialOrder = {
        items: [],
        buyer: newBuyer,
        date: "",
        total: 0,
        state: "generate",
    };

    const [order, setOrder] = useState(initialOrder);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewBuyer({ ...newBuyer, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setOrder({
            ...order,
            items: getResumeCart(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice(),
            buyer: newBuyer,
        });
        db.collection("orders")
            .add(order)
            .then((docRef) => {
                alert("ID DE NUMERO DE COMPRA: " + docRef.id);
            });
        setOrder({ ...initialOrder });
        setNewBuyer({ name: "", lastName: "", phone: "", email: "" });
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
                        value={newBuyer.name}
                    />
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Apellido"
                        name="lastName"
                        onChange={handleOnChange}
                        value={newBuyer.lastName}
                    />
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Telefono fijo o celular"
                        name="phone"
                        onChange={handleOnChange}
                        value={newBuyer.phone}
                    />
                    <Form.Label>Direccion email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleOnChange}
                        value={newBuyer.email}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    FINALIZAR PEDIDO
                </Button>
            </Form>
        </div>
    );
};

export default OrderForm;

//<div>
//<Form onSubmit={handleOnSubmit}>
//    <Form.Group className="mb-3">
//        <Form.Label>Nombre</Form.Label>
//        <Form.Control
//            type="text"
//            placeholder="Nombre"
//            name="name"
//            onChange={handleOnChange}
//            value={order.name}
//        />
//        <Form.Label>Apellido</Form.Label>
//        <Form.Control
//            type="text"
//            placeholder="Apellido"
//            name="lastName"
//            onChange={handleOnChange}
//            value={order.lastname}
//        />
//        <Form.Label>Telefono</Form.Label>
//        <Form.Control
//            type="text"
//            placeholder="Telefono fijo o celular"
//            name="phone"
//            onChange={handleOnChange}
//            value={order.phone}
//        />
//        <Form.Label>Direccion email</Form.Label>
//        <Form.Control
//            type="text"
//            placeholder="Email"
//            name="email"
//            onChange={handleOnChange}
//            value={order.email}
//        />
//    </Form.Group>
//    <Button variant="primary" type="submit">
//        FINALIZAR PEDIDO
//    </Button>
//    <Button onClick={vieww}>VER ORDEN</Button>
//</Form>
//</div>
