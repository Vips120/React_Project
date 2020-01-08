import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Signout } from "../../redux/action/auth";
const Navui = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <Link className="navbar-brand" to="/home">Navbar</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    {
                     props.loggedIn ?
                            <li className="nav-item">
                        <Link className="nav-link" to="/login"
                         onClick={() => props.Signout()}
                        >Logout</Link>
                        </li>
                            :
                            <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    }

                    {
                        props.loggedIn ?
                            <li className="nav-item">
                                <span>{props.usedetails.displayName}</span> 
                                <img src={props.usedetails.photoURL}
                                    style={{width:"50px", height:"50px"}}
                                className="img-responsive rounded-circle"
                                />
                            </li>
                            : null
                            
                    }
                    
                    
                </ul>
                
            </div>
        </React.Fragment>
    )
};
const mapStateToProps = state => {
    console.log(state);
    return { usedetails:state.auth };
}
export default connect(mapStateToProps, {Signout})(Navui);