import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { db } from "../../firebase";

//No encontre la manera de que me devolviera un solo producto
//usando lo visto en clase, debo haber creado mal el API

const ItemDetailContainer = ({ match }) => {
    let id = match.params.id;
    const [item, setItem] = useState({});

    const getItem = () => {
        db.collection("products").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((product) => {
                if (product.id === id) {
                    setItem({...product.data(), id: product.id});
                }
            });
        });
    };
    
    //    useEffect(() => {
    //        setTimeout(() => {
    //            fetch(`https://demo2045556.mockable.io/productos`)
    //            .then((response) => response.json())
    //            .then((data) => setItem(data[id-1]));
    //        }, 20);
    //    }, []);

    useEffect(() => {
        getItem();
    });

    return (
        <div>
            <ItemDetail arrayProduct={item} />
        </div>
    );
};

export default ItemDetailContainer;
