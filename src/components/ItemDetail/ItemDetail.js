import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

function ItemDetail({ arrayProduct }) {
    const [stock, setStock] = useState(5); // Esto debe venir por arrayProduct - debo ponerlo en el API
    const [finalOrder, setFinalOrder] = useState(0); 
    // No se si conviene usar el numero de stock como condicional para terminar el pedido del item o 
    // la constante finishOrder  booleana de abajo para terminar.
    //const [finishOrder, setFinishOrder] = useState(false);

    const onAdd = (quantitytToAdd) => {
        setFinalOrder(quantitytToAdd);
        //setFinishOrder(true);
        console.log(finalOrder + " ITEMS DE PEDIDO");
        console.log(quantitytToAdd);
    };

    console.log(finalOrder)
    console.log(finalOrder !== 0 )

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
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemDetail;

