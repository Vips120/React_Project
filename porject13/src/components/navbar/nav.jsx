import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    < Link className="navbar-brand" to="/">Navbar</ Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link  to="/home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                       
                    </div>
                </nav>
            </React.Fragment>
        )
    }
};

export default Navbar;