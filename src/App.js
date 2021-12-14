import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navegacion/navbar';
import Inicio from './paginas/inicio';
import Productos from './paginas/productos';
import Items from './paginas/items';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/productos' component={Productos}/>
          <Route path='/items' component={Items}/>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
