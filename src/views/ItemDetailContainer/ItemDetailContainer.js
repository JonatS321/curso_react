import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

//No encontre la manera de que me devolviera un solo producto
//usando lo visto en clase, debo haber creado mal el API

const ItemDetailContainer = ({match}) => {
    console.log(match, "CASA")
    let id = match.params.id;
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://demo2045556.mockable.io/productos`)
            .then((response) => response.json())
            .then((data) => setItem(data[id-1]));
        }, 2000);
    }, []);

    console.log(item.title)
    return (
        <div>
            <ItemDetail arrayProduct={item}/>
        </div>
    )
};

export default ItemDetailContainer
