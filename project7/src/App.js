import React, { Component } from 'react';
import Songlist from './components/songlist/songlist.component';
import Songdetails from './components/songdetails/songdetails';
class App extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <h1>SONG LIST:</h1>
            <Songlist/>
          </div>
          <div className="col-md-6">
            <Songdetails/>
          </div>
        </div>
      </div>
);    
  }
}

export default App;
