import React, {useEffect, useState} from 'react'
import { getFetch } from '../service/db';
import { useParams, NavLink } from 'react-router-dom';
import ItemList from './ItemList';
import {ButtonGroup, Button} from 'react-bootstrap';

const ItemListContainer = () => {

    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(true);

    const {id} = useParams();

    useEffect(() => {

        if (id) {
            getFetch
            .then( data =>{ 
                setproduct(data.filter(prod => prod.tipo === id))
            })
            .catch( err => console.log(err))
            .finally(() => setloading(false))
        }else{
            getFetch
            .then( data =>{ 
                setproduct(data)
            })
            .catch( err => console.log(err))
            .finally(() => setloading(false))
        }

    }, [id])


    return (
        <div>

            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary"><NavLink to={'/tipo/conAlcohol'}>Con Alohol</NavLink></Button>
                <Button variant="secondary"><NavLink to={'/tipo/sinAlcohol'}>sin Alcohol</NavLink></Button>
            </ButtonGroup>

            <ItemList  product={product} loading={loading}/>
        </div>
    )
}

export default ItemListContainer
