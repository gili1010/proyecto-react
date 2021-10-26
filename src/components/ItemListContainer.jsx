import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({titulo}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
