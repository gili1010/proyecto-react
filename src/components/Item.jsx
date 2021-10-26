import React,{useEffect,useState} from 'react'
import { getFetch } from '../service/db';
import {Card, Button, Row, Container, Col} from 'react-bootstrap';

const Item = () => {

    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getFetch
        .then( data =>{ 
            setproduct(data)
        })
        .catch( err => console.log(err))
        .finally(() => setloading(false))

    }, [])

    return (
        <Container>
            <Row>
            { loading ? <h1>Cargando...</h1> :
            
                product.map((prod) => 

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

                )}
                </Row>
            </Container>
    )
}

export default Item
