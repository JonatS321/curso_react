import React from "react";
import {Card, Button} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ arrayProduct }) {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={arrayProduct.pictureUrl} />
                <Card.Body>
                    <Card.Title>{arrayProduct.title}</Card.Title>
                    <Card.Title>${arrayProduct.price}</Card.Title>
                    <Card.Subtitle>{arrayProduct.category}</Card.Subtitle>
                    <Card.Text>{arrayProduct.description}</Card.Text>
                    <ItemCount stock={5} initial={1}/>
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemDetail;
