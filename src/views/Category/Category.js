import React, { useState, useEffect } from "react";
import "./Category.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { fb } from "../../firebase";


function Category({ match }) {
    const db = fb.firestore();

    const key_chosen = match.params.id;
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);

    const getCategory = () =>

        db.collection("categories").onSnapshot((querySnapshot) => {
            let item = null
            querySnapshot.forEach((doc) => {
                if (doc.data().key === key_chosen){
                    item = {...doc.data(), id:doc.id}
                }
            })
            console.log("CATEGORIA ELEGIDA", item)
        })

    const getCategories = () =>
        db.collection("categories").onSnapshot((doc) => {
            let items = [];
            doc.forEach((docu) => {
                console.log("RECORRIO CATEGORIAS");
                items.push({ ...docu.data(), id: docu.id })
            });
            items = items.filter( (item) => item.key === key_chosen)
            setCategories(items)
            console.log(items);
        });

    useEffect(() => {
        console.log("CATEGORIA EN MATCH ID", key_chosen)
        console.log("ACTUALIZA CATEGORIA")
        getCategory()
        console.log(category)
    }, []);

    //console.log("categorias")
    //console.log(category);
    //console.log(category.description);
    console.log(match.params.id)

    return (
        <div>
            <h1> Categoria {category.description}</h1>
            <ItemListContainer filter_category={category} />
        </div>
    );
}

export default Category;
