import React from "react";
const Productdetails = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>PRODUCT DETAILS: {props.match.params.id}</h1>
                    <button type="button" className="btn btn-danger btn-md"
                     onClick = {() => props.history.replace("/products")}
                    >
                        BACk
                    </button>
                </div>
          </div>
        </div>
    )
};

export default Productdetails;
