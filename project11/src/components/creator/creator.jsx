import React, { Component } from "react";
import Filed from "../field/field";
import Button from "../button/button";

class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                        <Filed />
                        <Button/>
</div>
                </div>
               
            </div>
        )
    }
}

export default Creator;