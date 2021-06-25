import React from "react";
import "./Item.css"
import {Card, Button} from "react-bootstrap";


const Item = ({itemArray}) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={itemArray.pictureUrl} />
        <Card.Body>
            <Card.Title>{itemArray.title}</Card.Title>
            <Card.Title>${itemArray.price}</Card.Title>
        </Card.Body>
        </Card>
        </>
    )
}

export default Item
