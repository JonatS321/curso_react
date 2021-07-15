import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import axios from "axios";
import { db } from "../../firebase";
import "./ItemList.css";

const ItemList = ({ category = "" }) => {
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);

    let filtered_items = [];

    const getItems = () =>
        db.collection("products").onSnapshot((doc) => {
            const items = [];
            doc.forEach((docu) => {
                items.push({ ...docu.data(), id: docu.id });
                console.log(docu.data(), docu.id);
            });
            console.log(items);
            setItems(items);
        });

    // No me dejo almacenar "setItems(filtered_items)"
    //por eso lo hice de esta manera.
    if (category != "") {
        filtered_items = items.filter((item) => item.category == category);
    } else {
        filtered_items = items;
    }

    useEffect(() => {
        getItems();
    }, []);

    //    useEffect(() => {
    //        const promesa = new Promise((resolve, reject) => {
    //            setTimeout(() => {
    //                resolve(
    //                    axios("https://demo2045556.mockable.io/productos").then(
    //                        (res) => setItems(res.data)
    //                    )
    //                );
    //            }, 2);
    //        });
    //    }, []);

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
