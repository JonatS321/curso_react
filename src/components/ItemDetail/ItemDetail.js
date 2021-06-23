import React from "react";
import {Card, Button} from "react-bootstrap";


function ItemDetail({ item }) {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">COMPRAR</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemDetail;
