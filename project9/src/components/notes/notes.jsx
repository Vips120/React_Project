import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchNote, removeNote } from "../../redux/action/index";
import { Link } from "react-router-dom";
class Notes extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.fetchNote();
    }
    render() {
        if (!this.props.note) { return null;}
        console.log("NOTES DATA", this.props.note);
        return (
            <div className="container">
                <div className="row">
                    {
                        _.map(this.props.note, (value, key) => (
                            <div className="col-md-8" key={key} style={{margin:"20px"}}>
                              <div className="card text-left">
                                <div className="card-body">
                                        <h4 className="card-title">
                                            {value.title}
                                  </h4>
                                        <p className="card-text">{value.description}</p>
                                        <button type="button" className="btn btn-outline-success"
                                         onClick={ () => this.props.removeNote(key)}
                                        >remove</button>
                                        <button type="button" className="btn btn-outline-danger"
                                            style={{marginLeft: '10px'}}
                                        >
                                            <Link
                                             to={`/edit/${key}`}
                                            >
                                            update
                                            </Link>
                                            </button>
                                </div>
                              </div>
                                
                         </div>
                        ))     
                  }
                </div>
            </div>
        )
    }
};
const mapStateToProps = state => {
 return {note: state.note}
};
export default connect(mapStateToProps, {fetchNote,removeNote})(Notes);