import React, {useEffect, useState} from 'react'
import { getFetch } from '../service/db';
import { useParams, NavLink } from 'react-router-dom';
import ItemList from './ItemList';
import {ButtonGroup, Button} from 'react-bootstrap';
import './ItemListContainer.scss';


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
        <div className="contenedor-principal">
            <div className="center">
            <ButtonGroup className="blanco"  aria-label="Basic example">
                <Button className="blanco" variant="secondary"><NavLink to={'/tipo/conAlcohol'}>Con Alohol</NavLink></Button>
                <Button className="blanco" variant="secondary"><NavLink to={'/tipo/sinAlcohol'}>sin Alcohol</NavLink></Button>
            </ButtonGroup>
            </div>

            <ItemList  product={product} loading={loading}/>
        </div>
    )
}

export default ItemListContainer
