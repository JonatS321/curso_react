import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "react-bootstrap";

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

const ItemCount = ({ stock, initial, onAdd }) => {
    // Modificar el initial segun el stock disponible (LUego)
    const [order, setOrder] = useState(initial);

    const handleCounterUp = () => {
        if (order < stock) {
            setOrder(order + 1);
        }
    };

    const handleCounterDown = () => {
        if (order > 1) {
            setOrder(order - 1);
        }
    };

    return (
        <div>
            <div className="itemCount">
                <Button onClick={handleCounterDown}> - </Button>
                <span>{order}</span>
                <Button onClick={handleCounterUp}> + </Button>
                <Button onClick={() => onAdd(order)}>Agregar al carrito</Button>
            </div>
        </div>
    );
};

export default ItemCount;
