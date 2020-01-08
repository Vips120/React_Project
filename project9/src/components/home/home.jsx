import React, { Component } from "react";
import { connect } from "react-redux";
import { database } from "../../firebase";
import Notes from "../notes/notes";
import { createNote} from "../../redux/action/index";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            notes:""
        };
    };
    componentDidMount() {
    //     database.on("value", (snapshot) => {
    //         let a = snapshot.val();
    //         this.setState({ notes: a});
    //   })
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleForm = e => {
        e.preventDefault();
        let data = {
            title: this.state.title,
            description: this.state.description
        };
        // console.log(data);
        // database.push(data);
        this.props.createNote(data);
        this.setState({title:"", description:""})
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>USER FORM DETAILS:</h1>
                        <form onSubmit={this.handleForm}>
                            <div className="form-group">
                                <input type="text" placeholder="enter title" name="title" className="form-control"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea type="text" placeholder="enter description" name="description" className="form-control"
                                    value={this.state.description}
                                 onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <Notes/>
            </div>
        )
    }
};
const mapStateProps = (state) => {
    
}

export default connect(null, {createNote})(Home);