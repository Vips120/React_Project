import React from "react";
const Yitems = ({d,video}) => {
    return (
                <div className="card text-left" onClick={ () => video(d)}>
                    <img className="card-img-top" src={d.snippet.thumbnails.high.url} alt={d.snippet.title}/>
                  <div className="card-body">
                        <h4 className="card-title">
                            {d.snippet.title}
                    </h4>
                        <p className="card-text">
                            {d.snippet.description}
                    </p>
                  </div>
              </div>
    )
   
};

export default Yitems;