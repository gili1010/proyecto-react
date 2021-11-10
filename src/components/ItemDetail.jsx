import React, {useState} from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { useCartContext } from './context/CartContextProvider';
import ItemCount from './ItemCount';
import './ItemDetail.scss';

const ItemDetail = ({product}) => {

    const [cantidad, setCantidad] = useState(1);

    const {cartList, agregarAlCarrito} = useCartContext();


	const onAdd = (count) => {
			setCantidad(count)
			alert(`Cantidad agregada al carrito es ${count}`)
            agregarAlCarrito({product, cantidad:count})
	}


   console.log(cartList)

    return (
        <Container className="center-detail">
            <Row>
            { 
                <Col key={product.id} className="detalle">
                    <Card className="cent-img" /* style={{ width: '12rem' }} */>
                    <Card.Img className="img-detalle" variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>$ {product.precio}</Card.Text>
                        <Card.Text> {product.desc}</Card.Text>
                        <NavLink to={`/detalle/${product.id}`}> 
                        <ItemCount stock = { product.stock } initial={cantidad} onAdd={onAdd} />

                        <button type="button" className="btn btn-outline-dark btn-sm m-1" disabled>
								{product.stock} cantidades disponibles
						</button>
                        <NavLink to="/">
								<button className="btn btn-outline-success btn-sm m-1">Volver</button>
						</NavLink>
                        </NavLink>
                    </Card.Body>
                    </Card>
                </Col>
                }
            </Row>
        </Container>
    )
}

export default ItemDetail
