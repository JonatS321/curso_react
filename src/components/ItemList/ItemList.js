import React, {Component, useState, useEffect} from 'react'
import Item from '../Item/Item'


const ItemList = ({productos}) => {

    const[items, setItems] = useState([])

    useEffect(() => {
        const promesa =  new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(
                    [
                        {id:1, title: "Disco Duro Western Digital 1tb", price:6000, pictureUrl:"1", description: "Excelente producto"},
                        {id:2, title: "Procesador Intel I7", price:40000, pictureUrl:"2", description: "Rendimiento 5 estrellas"},
                        {id:3, title: "Memoria ram 16gb Kingston", price:8000, pictureUrl:"3", description: "Todo terreno"},
                        {id:4, title: "Monitor 24 pulgadas", price:20000, pictureUrl:"4", description: "Frecuencia de 145hz"}
                    ]
                )
            }, 2000)
        })
        promesa.then((resultado)=>{
            setItems(resultado);
        })
    }, [])

    console.log(items)

    return (
        <div>
            <h1>LISTADO DE ITEMS: </h1>
            <ul>
                {items.map( producto => <Item itemArray= {producto} />)}
            </ul>
        </div>
    )
}

export default ItemList
