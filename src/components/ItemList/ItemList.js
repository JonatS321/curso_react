import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import { fb } from "../../firebase";
import "./ItemList.css";

const ItemList = ({ category = "" }) => {
    const [items, setItems] = useState([]);
    const db = fb.firestore();
    let filtered_items = [];


    const getItems = () =>
        db.collection("products").onSnapshot((doc) => {
            const items = [];
            doc.forEach((docu) => {
                items.push({ ...docu.data(), id: docu.id });
            });
            setItems(items);
        });

    if (category !== "") {
        filtered_items = items.filter(
            (item) => item.idCategory === category.id
        );
    } else {
        filtered_items = items;
    }

    useEffect(() => {
        getItems(category.id);
    }, []);

    return (
        <div className="ItemList">
            {filtered_items.map((product) => (
                <Link className="link" to={`/item/${product.id}`}>
                    <Item key={product.id} itemArray={product} />
                </Link>
            ))}
        </div>
    );
};

export default ItemList;
