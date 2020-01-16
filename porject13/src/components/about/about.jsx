import React, { Component } from "react";

class About extends Component {
    constructor() {
        super();
        this.state = {
            heading:"About SECTION"
        }
    };
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <h1>{this.state.heading}</h1> 
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default About;