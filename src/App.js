import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


import Home from './components/home.component';
import CreateShop from './components/create-shop.component';
import CreateProduct from './components/create-product.component';
import Navigation from './components/navigation.component';

function App() {
  return (
    <Router>
       <Navigation/>
    <Routes>
    <Route path='/' Component={Home}/>
      <Route path='/createshop' exact Component={CreateShop}/>
      <Route path='/createproduct' exact Component={CreateProduct}/>
    </Routes>


    </Router>
  );
}

export default App;