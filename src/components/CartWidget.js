import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"

class CartWidget extends React.Component{
    
    render(){
        return (
            <FontAwesomeIcon icon={faCartPlus}/>
        )
    }
}

export default CartWidget