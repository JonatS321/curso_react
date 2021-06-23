import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
            .then((response) => response.json())
            .then((data) => setItem(data.results));
        }, 2000);
    }, []);
    return (
        <div>
            <ItemDetail item = {item[21]} />
            {item.map( producto => (<span>{producto.title}</span>))}
        </div>
    )
};

export default ItemDetailContainer
