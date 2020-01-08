import React from "react";
const YDetails = ({ details }) => {
    console.log("Details......", details);
    if (!details) { return null;}
    return (
        <div className="container">
         <div className="row">
                <div className="col-md-12">
                    <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${details.id.videoId}`}></iframe>
                    </div>
                    <div className="card text-left">
                      <div className="card-body">
                            <h4 className="card-title">
                                {details.snippet.title}
                        </h4>
                      </div>
                    </div>
                </div>
            </div> 
        </div>
    )
};

export default YDetails;