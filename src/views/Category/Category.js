import React from "react";
import "./Category.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Category({ match }) {
    const category_chosen = match.params.id;
    return (
        <div>
			<h1> Categoria {category_chosen.replace("_", " ")}</h1>
            <ItemListContainer filter_category={category_chosen} />
        </div>
    );
}

export default Category;

