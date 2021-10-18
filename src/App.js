import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/component/Home/Home'
import Login from '../src/component/Login/Login'
import Register from '../src/component/Register/Register'
import Products from '../src/component/Products/Products'
import ProductDetails from '../src/component/ProductDetails/ProductDetails';
import NotFound from '../src/component/NotFound/NotFound'
import Header from '../src/component/Header/Header'
import About from '../src/component/About/About'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route path="/product/:productId">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
