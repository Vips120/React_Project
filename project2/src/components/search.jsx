import React, { Component } from 'react';
import axios from 'axios';
import Product from './product';
class Search extends Component {
    constructor() {
        super();
        this.state = {
            change: "",
            products: [],
            loading:""
        };
        
    }
    // FetchInputData = (event) => {
    //     console.log(event.target.value);
    //     this.setState({ change: event.target.value });
    // }; 

    handleFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        let item = await axios.get(`https://pixabay.com/api/?key=13877123-199ecacab2603cb7ed9c9c3fc&q=yellow+${this.state.change}&image_type=photo&pretty=true`);
        console.log(item);
        setTimeout(() => {
            this.setState({ loading: false });
            this.setState({ products: item.data });
        }, 1000);
       
          
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form style={{marginTop:"20px"}} onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="search anything" className="form-control"
                                    value={this.state.change}
                                 onChange = {(e) => 
                            
                                    this.setState({change: e.target.value})}
                                />
                                </div>
                          
                       </form>

                    </div>
                </div>
                <div className="row">
                    {this.state.loading ? <h1>LOADING...</h1> : <Product pro={this.state.products} />}
                    </div>

           </div>
       )
   }
};

export default Search;