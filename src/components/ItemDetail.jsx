import React from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.scss';

const ItemDetail = ({product}) => {
    return (
        <Container>
            <Row>
            { 
                product.map((prod) => 
                <Col key={prod.id} className="detalle">
                    <Card /* style={{ width: '12rem' }} */>
                    <Card.Img className="img-detalle" variant="top" src={prod.img} />
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>$ {prod.precio}</Card.Text>
                        <Card.Text>$ {prod.desc}</Card.Text>
                        <NavLink to={`/detalle/${prod.id}`}> 
                        <ItemCount stock = { prod.stock } />
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
