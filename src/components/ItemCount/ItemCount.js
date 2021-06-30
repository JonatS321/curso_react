import React, { Component, useState } from "react";
import "./ItemCount.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const ItemCount = ({ stock, initial  }) => {
    const [orden, setOrden] = useState(initial);
    const [emptyOrder, setEmptyOrder] = useState(true);

    const handleCounterUp = () => {
        if (orden < stock) {
            setOrden(orden + 1);
        }
    };

    const handleCounterDown = () => {
        if (orden > 1) {
            setOrden(orden - 1);
        }
    };

    const onAdd = (e) => {
        console.log(e)
        e.preventDefault();
        alert("Agrego al carrito " + orden);
        setEmptyOrder(!emptyOrder);
    };

    return (
        <div>
            {console.log(orden)}
            {emptyOrder && (
                <div className="itemCount">
                    <Button onClick={handleCounterDown}> - </Button>
                    <span>{orden}</span>
                    <Button onClick={handleCounterUp}> + </Button>
                    <Button onClick={onAdd}>Agregar al carrito</Button>
                </div>
            )}
        </div>
    );
};

export default ItemCount;

//<Link to="/cart"><Button onClick={onAdd}>Agregar al carrito</Button></Link>
