import React, { Component } from "react";
import ItemCount from "../ItemCount"
import ItemList from "../ItemList/ItemList"
import Item from "../Item/Item"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const arrayProductos = [
    {id:1, title: "Disco Duro Western Digital 1tb", price:6000, pictureUrl:"1", description: "Excelente producto"},
    {id:2, title: "Procesador Intel I7", price:40000, pictureUrl:"2", description: "Rendimiento 5 estrellas"},
    {id:3, title: "Memoria ram 16gb Kingston", price:8000, pictureUrl:"3", description: "Todo terreno"},
    {id:4, title: "Monitor 24 pulgadas", price:20000, pictureUrl:"4", description: "Frecuencia de 145hz"}
];

class ItemListContainer extends Component {

    render() {
        return (
            <div>
                <ItemCount stock={5} initial={1}/>
                <ItemList/>
                <ItemDetailContainer/>
                <h1>Pagina en construccion. Disculpenos.</h1>
            </div>
        );
    }
}

export default ItemListContainer;
