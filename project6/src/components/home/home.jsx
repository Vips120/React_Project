import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super();
        console.log(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>HOME SECTION</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;