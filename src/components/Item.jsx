import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';

const Item = ({prod}) => {

    return (
        <Col xs="6" md="3" lg="3">
            <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>$ {prod.precio}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Item
