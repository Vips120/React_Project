import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserAuthData } from "../../redux/action/auth";
import Navui from "./navui";
class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Navui loggedIn={this.props.loggedInuser}/>
            </nav>
        )
    }
};
const mapStateToProps = state => {
    return { loggedInuser: state.auth };
}

export default connect(mapStateToProps, {FetchUserAuthData})(Navigation);