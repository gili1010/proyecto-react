import React from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
    return (
        <Container>
            <Row>
            { 
                product.map((prod) => 
                <Col /* xs="6" md="3" lg="3" */>
                    <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={prod.img} />
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>$ {prod.precio}</Card.Text>
                        <NavLink to={`/detalle/${prod.id}`}> 
                        <ItemCount stock = { 5 } />
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
