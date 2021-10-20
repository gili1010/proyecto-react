
import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function Contenedor() {
     return (      
          <div>
               <NavBar />
               <ItemListContainer titulo="Bienvenidos"/>
               <ItemCount stock={5} producto="camisa"/>
          </div>   

     );
}

export default Contenedor;