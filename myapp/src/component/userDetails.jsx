import React from 'react';

const Userdetails = (props) => {
    console.log(props);
    let { imgUrl, username, role } = props;
    return (
            <div className="row">
            <div className="col-md-4">
         
                <img alt="username" src={imgUrl} className="rounded-circle" />
            </div>
            <div className="col-md-8" >
                <div className="col-md-4">
                    <button type="button" className="btn btn-danger btn-md">
                    {username}
                        </button>
                </div>
                <div className="col-md-4" >
                    <h5 >I AM {role}</h5>
                </div>
            </div>

             </div>
    )
};

export default Userdetails;