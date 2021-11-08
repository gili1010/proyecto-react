import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './Item.scss';

const Item = ({prod}) => {

    return (
        <Col xs="6" md="3" lg="2">
            <Card className="contenedor">
            <Card.Img className="img-card" variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title className="titulo">{prod.title}</Card.Title>
                <Card.Text>$ {prod.precio}</Card.Text>
                <NavLink to={`/detalle/${prod.id}`}> 
                    <Button variant="primary">Detalle del Producto</Button>
                </NavLink>           
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Item
