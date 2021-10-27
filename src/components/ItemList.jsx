import React from 'react';
import Item from './Item';
import {Row, Container} from 'react-bootstrap';

const ItemList = ({loading,product}) => {
    return (       

        <Container>
        <Row>
        { loading ? <h1>Cargando...</h1> :
        
            product.map((prod) => <Item  prod={prod}/>)}
        </Row>
        </Container>
)
}

export default ItemList







