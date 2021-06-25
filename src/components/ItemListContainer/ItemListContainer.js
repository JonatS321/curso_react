import React, { Component } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";


function ItemListContainer ({filter_category}) {
        return (
            <div className="ItemList-container">
                <ItemList category = {filter_category}/>
            </div>
        );
    }

export default ItemListContainer;

