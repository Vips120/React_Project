import React, { Component } from 'react';
import Search from './components/search/search.component';
import axios from "axios";
import Ylist from './components/youtubelist/youtubelist';
import YDetails from './components/youtubedetails/youtubedetails';
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "pop songs",
      youtubelist: [],
      loading: false,
    ydetails:""
    }
  };
  
   searchSomething = async (e) => {
     e.preventDefault();
     this.setState({ loading: true });
     let item = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAE6w92nhEQtgNWdliZzrDL9Id0ALTa0Jg`, {
       params: {
         part:"snippet",
         maxResults: 5,
         q: this.state.searchField,
         pageToken: "AIzaSyAE6w92nhEQtgNWdliZzrDL9Id0ALTa0Jg"
        }
       
     });
     console.log(item);
     setTimeout(() => {
       this.setState({ loading: false });
       this.setState({ youtubelist: item.data.items });
       this.setState({ydetails:item.data.items[0]})
     }, 1000);
     
   };
  playVideo = (data) => {
    this.setState({ ydetails: data });
   }
  
  render() {
    return(
      <div className="container">
          <form onSubmit={this.searchSomething}>
          <Search
            placeholder="search youtube list"
            SearchYoutube = {e => this.setState({searchField: e.target.value})}
          />
        </form>
        <div className="row">
          <div className="col-md-8">
          <YDetails details={this.state.ydetails}/>

          </div>
          <div className="col-md-4">
            
          { this.state.loading ? "LOADING...." :<Ylist list={this.state.youtubelist} pV={this.playVideo} />}
           </div>

          </div>

      
   </div>
    );
  }

}

export default App;
