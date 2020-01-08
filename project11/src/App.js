import React, { Component } from 'react';
import Creator from './components/creator/creator';
import CreateUser from "./contexts/creator";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:""
    }
  }
  ChangeValue = (lang) => {
    this.setState({ language: lang });
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-outline-primary"
            onClick = {() => this.ChangeValue("english")}
            >ENGLISH</button>
          &nbsp;
            <button type="button" className="btn btn-outline-danger"
              onClick = {() => this.ChangeValue("hindi")}
            >HINDI</button>
          </div>
        </div>
        <CreateUser.Provider value={this.state.language}>
        <Creator/>
        </CreateUser.Provider>
       
       </div>
    )
  }
}

export default App;
