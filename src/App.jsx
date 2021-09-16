import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomeScreen from "./containers/home/HomeScreen";
import React from "react";
import ProductScreen from "./containers/productscreen/ProductScreen";

import CartScreen from "./containers/cart/CartScreen";
import { LoginForm } from "./containers/login-form/LoginForm";
import ProductCreate from "./containers/product-create/ProductCreate";
function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/product/:id" component={ProductScreen} />

          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/createProduct">
            <ProductCreate />
          </Route>
          {/* <Route exact path="/">
              <UsersList /> 
            </Route>
            <Route path="/users/delete/:id">
              <UserDelete />
            </Route>
            <Route path="/user/create" exact>
              <UserCreate />
            </Route>
            <Route path="/user/update/:id" exact>
              <UserUpdate />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
