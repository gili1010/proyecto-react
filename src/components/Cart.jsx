import React from 'react';
import { useCartContext } from './context/CartContextProvider';
import {Link} from 'react-router-dom';
import './Cart.scss';

const Cart = () => {

    const {cartList, removeItem, removeCart, cartTotal, } = useCartContext();

    return (
        <div>
        {cartList.length
        ? <button className="btn btn-primary" onClick={() => removeCart()}>Vaciar carrito</button>
        : <div>
            <p className="empty-cart">El carrito está vacío</p>
            <Link className="go-to-home" to="/"> Ir al inicio</Link>
        </div>
        }
        <div className=
            {cartList.length
            ? "filled-cart"
            : "not-filled-cart"
            }
            > 
            {cartList.map(itemAdded => 
                <div className="item-added-card" key={itemAdded.product.id} >
                    <img className="item-added-img" src={itemAdded.product.img} alt={itemAdded.product.desc}/>
                    <div className="item-added-info">
                        <h5 className="item-added-title">{itemAdded.product.title}</h5>
                        <p className="item-added-description">{itemAdded.product.desc}</p>
                        <p className="item-added-price">$ {itemAdded.product.precio}</p>
                        <p className="item-added-quantity">Cantidad: {itemAdded.cantidad}</p>
                    </div>
                    <div>
                        <button className="remove-item" onClick={() => removeItem(itemAdded.product.id)}>Eliminar producto</button>
                    </div> 
                </div>
            )}
            <div>
                <p className="cart-total">Total de la compra: {cartTotal}</p>
            </div> 
        </div>
    </div>
    )
}
export default Cart
