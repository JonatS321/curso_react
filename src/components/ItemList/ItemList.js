import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import axios from "axios";
import { fb } from "../../firebase";
import "./ItemList.css";

const ItemList = ({ category = "" }) => {
    const [items, setItems] = useState([]);
    const db = fb.firestore();
    console.log(category)
    let filtered_items = [];

    const getItems = () =>
        db.collection("products").onSnapshot((doc) => {
            const products = [];
            console.log("asdaqwe")
            doc.forEach((docu) => {
                products.push({ ...docu.data(), id:docu.id });
            });
            if (category !== ""){
                console.log("HAY FILTRO")
                console.log(products.filter( (item) => item.idCategory === category.id))
            }
            setItems(products);
            console.log(products);

        });

    // No me dejo almacenar "setItems(filtered_items)"
    //por eso lo hice de esta manera.
    //if (category != "") {
    //    filtered_items = items.filter((item) => item.idCategory === category.id);
    //} else {
    //    filtered_items = items;
    //}

    useEffect(() => {
        getItems(category.id);

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
            {items.map((product) => (
                <Link className="link" to={`/item/${product.id}`}>
                    <Item key={product.id} itemArray={product} />
                </Link>
            ))}
        </div>
    );
};

export default ItemList;
