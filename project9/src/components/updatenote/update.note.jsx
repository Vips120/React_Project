import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNote } from "../../redux/action";
class Updatenote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            title:""
        }
    }
componentDidMount() {
        this.setState({
            description: this.props.data.description,
            title: this.props.data.title
        })
    };
    handleFormSubmit = e => {
        e.preventDefault();
        const item = {
            title: this.state.title,
            description: this.state.description
        };
        this.props.updateNote(this.props.match.params.id, item);
    };

    changeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="container" style={{marginTop:"20px"}}>
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    placeholder="enter description"
                                    name="description"
                                    onChange={this.changeInput}
                                    value={this.state.description}
                                    className="form-control"
                                >

                                </textarea>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="enter title"
                                    name="title"
                                    onChange={this.changeInput}
                                    value={this.state.title}
                                    className="form-control"
                                />

                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};
const mapStateToProps = (state,ownprops) => {
    console.log(state,ownprops);
    return { data:state.note[ownprops.match.params.id] };
}

export default connect(mapStateToProps, {updateNote})(Updatenote);