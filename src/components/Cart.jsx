import React, {useState} from 'react';
import { useCartContext } from './context/CartContextProvider';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import './Cart.scss';
import UserForm from './UserForm';
import { getFirestore } from '../service/getFirestore';

const Cart = () => {

    const [orderId, setOrderId] = useState("");
    const {cartList, removeItem, removeCart, cartTotal, userData } = useCartContext();


    const createOrder = (e) => {

        e.preventDefault()

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = userData;
        order.total = cartTotal;
        order.items = cartList.map(itemAdded => {
            const id = itemAdded.product.id;
            const title = itemAdded.product.title;
            const quantity = itemAdded.cantidad;
            const subtotal = itemAdded.product.precio * itemAdded.cantidad;
            return {id, title, quantity, subtotal}
        })

        const dataBase = getFirestore()

        dataBase.collection("orders").add(order)
        .then(response => setOrderId(response.id))
        .catch (error => alert("Error:", error))
        .finally(() => removeCart())

        const updateStock = dataBase.collection("items").where
        (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.product.id))

        const batch = dataBase.batch();

        updateStock.get()
        .then(response => {
            response.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(idToUpdate => idToUpdate.product.id === docSnapshot.id).cantidad
                })
            })
        
        batch.commit()
        .catch (error => alert("Error:", error))
        })
    }



    return (
        <div>
        {cartList.length
        ? <button className="btn btn-primary" onClick={() => removeCart()}>Vaciar carrito</button>
        :orderId==="" ? <div>
            <p className="empty-cart">El carrito está vacío</p>
            <Link className="go-to-home" to="/"> Ir al inicio</Link>
        </div> : <div>
        <p className="empty-cart">¡Gracias por tu compra!</p>
        <p className="order-id">Tu código de operación es: {orderId}</p>
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

            <UserForm createOrder={createOrder}/>
        </div>
    </div>
    )
}
export default Cart
