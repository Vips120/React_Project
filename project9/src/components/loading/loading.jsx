import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import { fetchNote } from "../../redux/action/index";
import { FetchUserAuthData } from "../../redux/action/auth";
class Loading extends Component {
    componentDidMount() {
    this.props.FetchUserAuthData();
    this.props.fetchNote();
    }
    render() {
        if (!this.props.noteloading && !this.props.authloading) {
                 
           return <div> {this.props.children} </div>
            }
        else {
             return <div>LOADING.....</div>
             }
       
   }
};
const mapStateToProps = state => {
    return {
        noteloading: state.spinner.note,
        authloading: state.spinner.auth,
        user: state.auth
    };
}
export default withRouter(connect(mapStateToProps, {FetchUserAuthData,fetchNote})(Loading));