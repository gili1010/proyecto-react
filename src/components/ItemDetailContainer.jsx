import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { getFetch } from '../service/db';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../service/getFirestore';

const ItemDetailContainer = () => {


    const [product, setproduct] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        const dB = getFirestore()

        const dBQuery = dB.collection("items").doc(id).get()

        dBQuery
        .then(data => setproduct({id:data.id, ...data.data()}))
        .catch (error => alert("Error:", error))
        .finally(()=> console.log(""))

    },[id])

/*     useEffect(() => {

        if (id) {
            getFetch
            .then( data =>{ 
                setproduct(data.find(prod => prod.id === Number(id)))
            })
            .catch( err => console.log(err))
            .finally(() => console.log(""))
        }

    }, [id]) */

    return (
        <div>
            <h3>Detalle del Producto seleccionado</h3> 
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
