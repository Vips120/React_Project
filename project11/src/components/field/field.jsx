import React, { Component } from "react";
import CreateUser from "../../contexts/creator";
class Filed extends Component {
    static contextType = CreateUser;
    render() {
        let data = this.context === "english" ? "username" : "TUMCHA NAV";
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>
                        {data}
                    </label>
                    <input type="text" className="form-control" placeholder="enter here..."/>
                </div>
            </React.Fragment>
        )
    }
};

export default Filed;