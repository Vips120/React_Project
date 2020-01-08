import React, { Component } from 'react';
import Post from './components/post/post';
import Users from './components/users/users';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <Post/>
          </div>
          <div className="col-md-6">
             <Users/>
            </div>
         </div>
        </div>
    );
  }
 
}

export default App;
