import React from "react";
import Yitems from "./youtubeitems";
const Ylist = ({list,pV}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    list.map(data => (
                            <Yitems key={data.id.videoId} d={data} video={pV} />
                    ))
                }
               
            </div>
        </div>
    )
};
export default Ylist;