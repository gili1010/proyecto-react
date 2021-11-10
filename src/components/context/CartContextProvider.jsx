import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const agregarAlCarrito = (items) =>{
/*         setCartList([
            ...cartList, items
        ]) */    
        console.log(items.product[0].id)

        const findExiste =cartList.find(itemadd => itemadd.product.id === items.product.id)

        if (findExiste) {
            findExiste.cantidad = findExiste.cantidad + items.cantidad
            setCartList(cartList)
        }
        else {
            setCartList([...cartList, items])
        }
    }

    const mostrarListado = () => {
        console.log(cartList);
    }


    return (
        <div>
            <CartContext.Provider value={{
                cartList,
                mostrarListado ,
                agregarAlCarrito
                }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
