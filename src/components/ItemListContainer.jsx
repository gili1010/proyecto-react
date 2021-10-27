import React, {useEffect, useState} from 'react'
import { getFetch } from '../service/db';
import ItemList from './ItemList'

const ItemListContainer = ({titulo}) => {

    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getFetch
        .then( data =>{ 
            setproduct(data)
        })
        .catch( err => console.log(err))
        .finally(() => setloading(false))

    }, [])


    return (
        <div>
            <h1>{titulo}</h1>
            <ItemList  product={product} loading={loading}/>
        </div>
    )
}

export default ItemListContainer
