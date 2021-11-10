import React, {useState} from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.scss';

const ItemDetail = ({product}) => {

    const [cantidad, setCantidad] = useState(1);

	const onAdd = (count) => {
			setCantidad(count)
			alert(`Cantidad agregada al carrito es ${count}`)
	}

    return (
        <Container className="center-detail">
            <Row>
            { 
                product.map((prod) => 
                <Col key={prod.id} className="detalle">
                    <Card className="cent-img" /* style={{ width: '12rem' }} */>
                    <Card.Img className="img-detalle" variant="top" src={prod.img} />
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>$ {prod.precio}</Card.Text>
                        <Card.Text> {prod.desc}</Card.Text>
                        <NavLink to={`/detalle/${prod.id}`}> 
                        <ItemCount stock = { prod.stock } initial={cantidad} onAdd={onAdd} />

                        <button type="button" class="btn btn-outline-dark btn-sm m-1" disabled>
								{prod.stock} cantidades disponibles
						</button>
                        <NavLink to="/">
								<button class="btn btn-outline-success btn-sm m-1">Volver</button>
						</NavLink>
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
