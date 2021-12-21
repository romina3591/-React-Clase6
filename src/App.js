import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navegacion/navbar';
import Inicio from './paginas/inicio';
import Productos from './paginas/productos';
import CartWidget from './components/CartWidget';
import Itemcount from './components/ItemCount';
import Item from './components/Item';
import ItemList from './components/ItemList';
import ItemListContainer from './paginas/ItemListContainer';






function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <CartWidget></CartWidget>
      <ItemListContainer></ItemListContainer>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/productos' component={Productos}/>
          <Route path='/Itemcount' component={Itemcount}/>
          <Route path='/Item' component={Item}/> 
          <Route path='/ItemList' component={ItemList}/>
          
          
          
          
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
