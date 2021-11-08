
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto';
import './index.css';
import Cart from './components/Cart';

function Contenedor() {
     return (      
          <div>
               <Router>
                    <NavBar />
                    <Switch >
                         <Route exact path="/"><ItemListContainer /></Route>
                         <Route exact path="/tipo/:id"component={ItemListContainer} />
                         <Route exact path="/detalle/:id"component={ItemDetailContainer} />
                         <Route exact path="/cart"><Cart /></Route>
                         <Route exact path="/nosotros"><Nosotros /></Route>
                         <Route exact path="/contacto"><Contacto /></Route>
                    </Switch>
               </Router>

          </div>   

     );
}

export default Contenedor;