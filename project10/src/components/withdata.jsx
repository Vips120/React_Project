import React, { Component } from "react";
import axios from "axios";
const Withdata = (Componentwrapper, data) => {
    class withdata extends Component {
        constructor(props) {
            super(props);
            this.state = {
                items:[]
            }
        }
        async componentDidMount() {
            let response = await axios.get(data);
            this.setState({ items: response.data.slice(0, 4) });
        }
        render() {
            return (
                <React.Fragment>
                    <Componentwrapper item={this.state.items}/>
                </React.Fragment>
            )
        }
    }
    return withdata;
}

export default Withdata;