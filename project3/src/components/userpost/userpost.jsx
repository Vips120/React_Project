import React from "react";
const Userpost = ({post}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    post.map(item => (
                        <div className="col-md-4" key={item.id} >
                            <div className="card text-left" style={{marginBottom:"15px"}} >
                            <img className="card-img-top" src={`https://i.pravatar.cc/150?img=${item.id}`} alt={item.name}/>
                              <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.username}</p>
                              </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Userpost;