import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import Login from './components/login/login';
import Authloading from './components/authloading/auth.loading';
import Updatenote from './components/updatenote/update.note';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Authloading>
              <Route path="/edit/:id" component={Updatenote}/>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            </Authloading>
         

         </Switch>
         </div>
      </React.Fragment>
      
    );
  }
}

export default App;
