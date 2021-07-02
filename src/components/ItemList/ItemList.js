import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import axios from "axios";
import "./ItemList.css";

const ItemList = ({ category = "" }) => {
    const [items, setItems] = useState([]);
    let filtered_items = [];

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    axios("https://demo2045556.mockable.io/productos").then(
                        (res) => setItems(res.data)
                    )
                );
            }, 2);
        });
    }, []);

    if ( category  != "") {
        filtered_items = items.filter((item) => item.category ==  category );
    }
    else {filtered_items = items}

// No me dejo almacenar "setItems(filtered_items)"
//por eso lo hice de esta manera.

    return (
        <div className="ItemList">
            {filtered_items.map((producto) => (
                <Link className="link" to={`/item/${producto.id}`}>
                    <Item key={producto.id} itemArray={producto} />
                </Link>
            ))}
        </div>
    );
};

export default ItemList;

//return (
//    <div className="ItemList">
//        {items.map((producto) => (
//            <Link className="link" to= {`/item/${producto.id}`} >
//                <Item key={producto.id} itemArray={producto} />
//            </Link>
//        ))}
//    </div>
//);

//return (
//    <div className="ItemList">
//        {(items.filter(item => item.category == category)).map((producto) => (
//            <Link className="link" to={`/item/${producto.id}`}>
//                <Item key={producto.id} itemArray={producto} />
//            </Link>
//        ))}
//    </div>
//);