import React, { useState, useContext} from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext"

function ItemDetail({ arrayProduct }) {
    const [stock, setStock] = useState(5); // Esto debe venir por arrayProduct - debo ponerlo en el API
    const [finalOrder, setFinalOrder] = useState(0); 
    // No se si conviene usar el numero de stock como condicional para terminar el pedido del item o 
    // la constante finishOrder  booleana de abajo para terminar.
    //const [finishOrder, setFinishOrder] = useState(false);
    const [items, setItems, addItem, removeItem, clear, hola] = useContext(CartContext);

    const onAdd = (quantitytToAdd) => {
        setFinalOrder(quantitytToAdd)
        addItem(arrayProduct, quantitytToAdd);
    };

    const showItems = () => {
        console.log(items);
        console.log(items.lenght);
    }

    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={arrayProduct.pictureUrl} />
                <Card.Body>
                    <Card.Title>{arrayProduct.title}</Card.Title>
                    <Card.Title>${arrayProduct.price}</Card.Title>
                    <Card.Subtitle>{arrayProduct.category}</Card.Subtitle>
                    <Card.Text>{arrayProduct.description}</Card.Text>
                    {finalOrder === 0 ? (
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    ) : (
                        <Button><Link to="/cart">Terminar compra?</Link></Button> 
                        //Eliminar boton cuando cree el style de link
                    )}
                    <Button onClick={showItems}>CARRITO CONSOLE</Button>
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemDetail;

