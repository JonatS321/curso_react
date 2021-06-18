import React, { Component } from "react";
import ItemCount from "../ItemCount"

class ItemListContainer extends Component {

    render() {
        return (
            <div>
                <ItemCount stock={5} initial={1}/>
                <h1>Pagina en construccion. Disculpenos.</h1>
            </div>
        );
    }
}

export default ItemListContainer;
