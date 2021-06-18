import React, { Component, useState } from "react";
import { render } from "react-dom";
import { Button } from 'react-bootstrap';

//class ItemCount2 extends Component {
//    constructor() {
//        super();
//        this.state = {
//            counter: 0,
//        };
//    }
//    handleCounterUp = () => {
//        this.setState({ counter: this.state.counter + 1 });
//    };
//    handleCounterDown = () => {
//        this.setState({ counter: this.state.counter - 1 });
//    };
//    render() {
//        return (
//            <div className="ItemCount">
//                <h1>PRODUCTO EN VENTA</h1>
//                <div>
//                <Button variant="danger" onClick={this.handleCounterDown}> - </Button>{''}
//                <span>{this.state.counter}</span>
//                <Button variant="success" onClick={this.handleCounterUp}> + </Button>{''}
//                </div>
//            </div>
//        );
//    }
//};

const ItemCount = ({stock, initial}) => {
    const [orden, setOrden] = useState(initial);

    const handleCounterUp = () => {
        if (orden < stock){
            setOrden(orden + 1)
        }
    }

    const handleCounterDown = () => {
        if (orden > 1){
            setOrden(orden - 1)
        }
    }

    const onAdd = () =>{
        alert("Agrego al carrito " + orden)
    }

    return (
        <>
        <Button onClick={handleCounterDown}> - </Button>
        <span>{orden}</span>
        <Button onClick={handleCounterUp}> + </Button>
        <Button onClick={onAdd}>Agregar al carrito</Button>
        </>
    )
};

export default ItemCount;
