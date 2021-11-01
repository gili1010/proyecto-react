import React from 'react';
import {Row, Container, Card, Button, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const ItemDetail = ({product}) => {
    return (
        <Container>
            <Row>
            { 
                product.map((prod) => 
                <Col xs="6" md="3" lg="3">
                    <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={prod.img} />
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>$ {prod.precio}</Card.Text>
                        <NavLink to={`/detalle/${prod.id}`}> 
                        <Button variant="primary">Agregar al carrito</Button>
                        </NavLink>
                    
                    </Card.Body>
                    </Card>
                </Col>
                )}
            </Row>
        </Container>
    )
}

export default ItemDetail