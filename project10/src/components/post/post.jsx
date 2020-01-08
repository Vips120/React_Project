import React from "react";
import Withdata from "../withdata";
const Post = (props) => {
    return (
        <React.Fragment>
            {
                props.item.map(data => (
                    <div className="card text-white bg-danger" key={data.id}
                     style={{margin: "20px"}}
                     >
                      <div className="card-body">
                            <h4 className="card-title">
                                {data.title}
                        </h4>
                            <p className="card-text">{data.body}</p>
                      </div>
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default Withdata(Post, "https://jsonplaceholder.typicode.com/posts");