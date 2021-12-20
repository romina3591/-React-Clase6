import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navegacion/navbar';
import Inicio from './paginas/inicio';
import Productos from './paginas/productos';
import Items from './paginas/items';
import CartWidget from './components/CartWidget';
import ItemListContainer from './paginas/ItemListContainer';






function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <CartWidget></CartWidget>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/productos' component={Productos}/>
          <Route path='/items' component={Items}/>
          <Route path='/ItemListContainer' component= {ItemListContainer}/>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
