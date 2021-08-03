import React, { useState, useEffect } from "react";
import "./Category.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { fb } from "../../firebase";

function Category({ match }) {
    const db = fb.firestore();
    const key_chosen = match.params.id;

    const [categories, setCategories] = useState([]);
    let categorySelected = [];

    const getCategories = () =>
        db.collection("categories").onSnapshot((doc) => {
            const items = [];
            doc.forEach((docu) => {
                items.push({ ...docu.data(), id: docu.id });
            });
            setCategories(items);

        });

    if (key_chosen !== "") {
        categorySelected = categories.filter(
            (category) => category.key === key_chosen
        );
        categorySelected = categorySelected[0];
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            <ItemListContainer filter_category={categorySelected} />
        </div>
    );
}

export default Category;
