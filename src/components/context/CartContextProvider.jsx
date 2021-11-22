import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);


const CartContextProvider = ({children}) => {

    const [itemcantidad, setItemCantidad] = useState(0);

    const [cartTotal, setCartTotal] = useState(0);

    const [cartList, setCartList] = useState([]);

    const [userData, setUserData] = useState({name:"", surname:"", phone:"", email:""});

    /* funcion agregar al carrito */
    const agregarAlCarrito = (items) =>{

        setItemCantidad(itemcantidad + items.cantidad)

        setCartTotal(cartTotal + (items.product.precio * items.cantidad))

        const findExiste =cartList.find(itemadd => itemadd.product.id === items.product.id)

        if (findExiste) {
            findExiste.cantidad = findExiste.cantidad + items.cantidad
            setCartList(cartList)
        }
        else {
            setCartList([...cartList, items])
        }
    }

        /* funcion vaciar carrito*/
    const removeCart = () => {
        setItemCantidad(0)
        setCartTotal (0)
        setCartList([])
    }

        /* funcion eliminar producto por id */
    const removeItem = idItemToRemove => {
        const itemToRemove = cartList.find(itemInCart => itemInCart.product.id === idItemToRemove)
        setItemCantidad(itemcantidad - itemToRemove.cantidad)
        setCartTotal(cartTotal - (itemToRemove.product.precio * itemToRemove.cantidad))
        setCartList(cartList.filter(itemSearched => itemSearched.product.id !== idItemToRemove))
    }

    const handleForm = (e) => {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <CartContext.Provider value={{
                cartList,
                itemcantidad,
                removeItem ,
                cartTotal,
                agregarAlCarrito,
                removeCart,
                handleForm, 
                userData
                }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
