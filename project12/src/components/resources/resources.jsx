import React, { useState,useEffect} from 'react'
import axios from "axios";
const Resources = (props) => {
    const [data, setdata] = useState("");
    const FetchData = async (resource) => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setdata(response.data);
    };
    useEffect(() => {
        FetchData(props.resource);
    }, [props.resource]);
    return (
        <div className="container">
            <div className="row">
                 {data.length}
            </div>
        </div>
    )
    };

    // render() {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                  {this.state.data.length}
    //             </div>
    //         </div>
    //     )
    // }
// }

export default Resources;