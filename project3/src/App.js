import React, { Component}from 'react';
import axios from 'axios';
import Search from './components/search/search.component';
import Userpost from './components/userpost/userpost';
class App extends Component{
  constructor() {
    super();
    this.state = {
      searchField: "",
      userpost: []
    }
  };
 async  componentDidMount() {
   let item = await axios.get("https://jsonplaceholder.typicode.com/users");
   this.setState({ userpost: item.data });
  };
  render() {
    const { userpost, searchField } = this.state;
    const searcUserPost = userpost.filter(item => {
      console.log(item);
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log("userrerere",searcUserPost);
    return (
      <div className="container">
        <div className="row">
          <Search
             placeholder="search something"
            search={e => this.setState({ searchField: e.target.value })} />
        </div>
        <div className="row">
          <Userpost post={searcUserPost}/>
         </div>
      </div>
    );
  }
 
}

export default App;
