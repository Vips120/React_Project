import React from "react";

const Discard = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                     {props.children}
                </div>
                <div className="col-md-12">
                    <button type="button" class="btn btn-outline-primary"
                     style={{margin:"20px"}}
                    >YES</button>
                    <button type="button" class="btn btn-outline-danger">NO</button>
                </div>
             </div>
        </div>
    )
};

export default Discard;