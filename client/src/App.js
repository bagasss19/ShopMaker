import React from 'react';
// import ReactDOM from 'react-dom';
// import Navbar from 'react-bootstrap/Navbar'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavbarHome from './components/NavbarHome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductCustomer from './pages/ProductCustomer';
import AddToCart from './pages/AddToCart';
import CartCustomer from './pages/CartCustomer';

function App() {
  return (
    <>
      <Router>
        <NavbarHome></NavbarHome>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/cartCustomer">
          <CartCustomer></CartCustomer>
        </Route>

        <Route path="/productCustomer">
          <ProductCustomer></ProductCustomer>
        </Route>

        <Route path="/addToCart">
          <AddToCart></AddToCart>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/product">
          <Product></Product>
        </Route>
      </Router>
    </>
  );
}

export default App;
