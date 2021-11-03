import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

const ItemCount = ({stock}) => {

    const [pedido, setpedido] = useState(1);

    //operacion sumar producto
    const sumar = () =>{
        if (pedido < stock){
            setpedido(pedido + 1)
        }
    }
     //operacion restar producto
    const restar = () =>{
        if (pedido > 1){
        setpedido(pedido - 1)
        }
    }
       //operacion agregar producto al carrito
    const agregar = () =>{
        alert(`${pedido} unidades agregadas al carrito`);
    }

    return (
        <div>
            <h4>Stock: {stock}</h4>
            <h3>pedido: {pedido}</h3>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <Button onClick={agregar} variant="primary">Agregar al carrito</Button>

        </div>
    )
}



export default ItemCount