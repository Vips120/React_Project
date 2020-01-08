import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Products from "./components/products/products";
import Admin from "./components/admin/admin";
import Productdetails from './components/productdetails/productdetails';
import Notfound from './components/not-found/notfound';
class App extends Component{
  constructor() {
    super();
  };
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
        <Switch>
            <Route path="/home" render={(props) => <Home sortby="newest" {...props}/>}/>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
            <Route path="/admin" component={Admin} />
            <Route path="/productsdetails/:id" component={Productdetails}/>
            <Route path="/"  exact component={Home} />
            <Route path="/not-found" component={Notfound} />
            <Redirect to="/not-found"/>
            </Switch>
        </div>
       
      
          </React.Fragment>
     
    );
  }

}

export default App;
