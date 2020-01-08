import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Authloading extends Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            this.props.history.push("/login")
         }
      
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                            <div className="col-md-12">
                            {this.props.children}
                            </div>
                </div>
          </div>
      )
  }
};

const mapStateToProps = state => {
    console.log(state);
    return { loggedIn: state.auth}
}

export default withRouter(connect(mapStateToProps)(Authloading));