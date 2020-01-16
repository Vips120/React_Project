import React, { Component, lazy, Suspense } from 'react';
import Navbar from './components/navbar/nav';
import { Route, Switch} from "react-router-dom";
import Home from './components/home/home';
//import Login from './components/login/login';
// import About from './components/about/about';
let About = lazy(() => import('./components/about/about'));
let Login = lazy(() => import('./components/login/login'));
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Suspense fallback={<div>LOADING...</div>}>
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login}/>
        </Suspense>
        <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
       
     
      </React.Fragment>
    
    )
  }
}

export default App;
