import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemCount.scss';

function InputCart({count, onAdd}) {
	return (
		<Button
			variant="success"
			onClick={() => {
				onAdd(count);
			}}>
			Agregar al Carrito
		</Button>
	);
}

const InputBuy = () => {
	return (
		<Button as={Link} to="/cart" variant="primary">
			Continuar la Compra
		</Button>
	);
};


const ItemCount = ({stock, initial, onAdd}) => {

    const [pedido, setpedido] = useState(initial);

    const [inputType, setInputType] = useState("input");

    const handleInput = () => {
		setInputType("buy");
	};

    //operacion sumar producto
    const sumar = () =>{
        if (pedido < stock){
            setpedido(pedido + 1)
        }
    }
     //operacion restar producto
    const restar = () =>{
        if (pedido > 1){
        setpedido(pedido - 1)
        }
    }


    return (
        <div >

            <div >
                <div className="col itemCount">
                <Button
						onClick={restar}
						disabled={pedido === 1}
                        className="m-3">
                            <i class="fas fa-arrow-circle-left"></i>
                </Button>

                <h5 className="fs-3">{pedido}</h5>

					<Button
						onClick={sumar}
						disabled={pedido === stock}
                        className="m-3">
                            <i class="fas fa-arrow-circle-right"></i>
                    </Button>
                </div>
            

            </div>
            
            <div className="text-center" onClick={handleInput}>
				{inputType === "input" ? <InputCart count={pedido} onAdd={onAdd} /> : <InputBuy />}
			</div>

        </div>
    )
}

export default ItemCount