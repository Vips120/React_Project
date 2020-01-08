import React, { Component } from 'react';
import SimpleReactValidator from "simple-react-validator";
import Templateform from './templateform';
import "./form.css";
class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            mobileno: "",
            UserLogin: {
                userId: "",
                username:""
           }
        };
        this.validator = new SimpleReactValidator({autoForceUpdate:this});
    };
    setFirstname = (e) => this.setState({ firstname: e.target.value });
    setLastname = (e) => this.setState({ lastname: e.target.value });
    setEmail = (e) => this.setState({ email: e.target.value });
    setPassword = (e) => this.setState({ password: e.target.value });
    setMobileno = (e) => this.setState({ mobileno: e.target.value }); 
    setUsername = (e) => {
        let a = Object.assign({}, this.state.UserLogin);
        a.username = e.target.value;
        console.log(a.username);
        this.setState({ UserLogin: a });
    };
    setUserId = (e) => {
        let b = Object.assign({}, this.state.UserLogin);
        b.userId = e.target.value;
        console.log(b.userId);
        this.setState({ UserLogin: b});
    };

    handleFormSubmit = () => {
        if (this.validator.allValid()) {
            let data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                mobileno: this.state.mobileno,
                UserLogin: {
                    username: this.state.UserLogin.username,
                    userId: this.state.UserLogin.userId
                }

            };
            console.log(data);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
      }
    };
    render() {
        const style = {
            marginTop: "50px",
            
        };
        return (
            <div className="container" style={style}>
                <div className="row">
                <div className="col-md-8">
                        <form>
                            <div className="form-group">
                        <input type="text"
                             className="form-control" placeholder="enter firstname"
                                    onChange={this.setFirstname}
                                    value={this.state.firstname}
                                />
                                {
                                    this.validator.message('firstname',this.state.firstname,'required|alpha|min:5' )
                        }
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter lastname"
                                    onChange={this.setLastname}
                                    value={this.state.lastname}
                                />
                                {
                                    this.validator.message("lastname", this.state.lastname , "required|alpha|min:3")
                                }
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="enter email"
                                    onChange={this.setEmail}
                                    value={this.state.email}
                                />
                                  {
                                    this.validator.message("email", this.state.email , "required|email")
                                }
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="enter password"
                                    onChange={this.setPassword}
                                    value={this.state.password}
                                />
                                {
                                    this.validator.message("password", this.state.password , "required|min:3")
                                }
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter mobile no"
                                    onChange={this.setMobileno}
                                    value={this.state.mobileno}
                                />

{
                                    this.validator.message("mobileno", this.state.mobileno , "required")
                                }
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter userid"
                                    onChange={ this.setUserId}
                                    value={this.state.UserLogin.userId}
                                />

{
                                    this.validator.message("userId", this.state.UserLogin.userId , "required")
                                }
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter username"
                                    onChange={this.setUsername}
                                    value={this.state.UserLogin.username}
                                />

{
                                    this.validator.message("username", this.state.UserLogin.username , "required")
                                }
                            </div>
                            <button type="button" className="btn btn-outline-primary"
                            onClick={this.handleFormSubmit}
                            >submit</button>

                        </form>
                      </div>
                 </div>

          </div>
      )
  }
};

export default Form;