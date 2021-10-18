
import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function Contenedor() {
     return (      
          <div>
               <NavBar />
               <ItemListContainer titulo="Bienvenidos"/>
          </div>   

     );
}

export default Contenedor;