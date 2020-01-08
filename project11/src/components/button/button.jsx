import React, { Component } from "react";
import CreateUser from "../../contexts/creator";
class Button extends Component {
    static contextType = CreateUser;
    render() {
        let data = this.context === "english" ? "username" : "NAAM";
        return (
            <React.Fragment>
                <button type="button" className="btn btn-outline-danger">
                  {data}
                </button>
            </React.Fragment>
        )
    }
};

export default Button;