import React from 'react';
import cart from '../image/cart.png';
import { useCartContext } from './context/CartContextProvider';
import {Link} from 'react-router-dom';
import './CartWidget.scss';


const CartWidget = () => {

    const {itemcantidad} = useCartContext()

        return (
            <Link to="/cart" className="cartwidget-container">
                <button className="cartwidget">
                <p className="cartwidget-quantity">{itemcantidad}</p>
                <img src={cart} alt="Carrito"/>
                </button>
            </Link>
            )
}

export default CartWidget
