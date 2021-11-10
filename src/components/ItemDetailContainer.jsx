import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { getFetch } from '../service/db';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {


    const [product, setproduct] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        if (id) {
            getFetch
            .then( data =>{ 
                setproduct(data.find(prod => prod.id === Number(id)))
            })
            .catch( err => console.log(err))
            .finally(() => console.log(""))
        }

    }, [id])

    return (
        <div>
            <h3>Detalle del Producto seleccionado</h3> 
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
