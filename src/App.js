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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Footer from './component/footer/Footer';
import Freeservice from './component/FreeService/Freeservice';
function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/product/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/support">
              <Freeservice></Freeservice>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
