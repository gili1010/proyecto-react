import React from 'react';
import cart from '../image/cart.png';

const CartWidget = ({cantidad}) => {
    return (
        <div>
            <img src={cart} alt="" />
            {cantidad}
        </div>
    )
}

export default CartWidget
