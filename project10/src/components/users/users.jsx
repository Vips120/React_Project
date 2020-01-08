import React from "react";
import Withdata from "../withdata";
const Users = (props) => {
    return (
        <React.Fragment>
            {
                props.item.map(data => (
                    <div className="card text-white bg-success"
                        key={data.id}
                        style={{margin: "20px"}}
                    >
                      <div className="card-body">
                            <h4 className="card-title">{data.name}</h4>
                            <p className="card-text">{data.username}</p>
                      </div>
                    </div>
                ))
            }
        </React.Fragment>
    )
}
     

export default Withdata(Users, "https://jsonplaceholder.typicode.com/users");