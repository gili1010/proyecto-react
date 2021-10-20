import React, { useState } from 'react';

const ItemCount = ({stock, producto}) => {

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
        console.log(`${pedido} ${producto} agregadas al carrito`);
    }

    return (
        <div>
            <h5>{producto}</h5>
            <h4>Stock: {stock}</h4>
            <h3>pedido: {pedido}</h3>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
