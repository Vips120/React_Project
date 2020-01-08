import React, { Component } from "react";
import "./style.css";
class Whether extends Component {

   
    wconfig = {
        winter: {
            title: 'ITS very very cold outside.....',
            icon: "fa fa-snowflake-o fa-3x"
        },
        summer: {
            title:"ITS very very hot outside.....",
           icon: "fa fa-sun-o fa-3x"
        },
        monsoon: {
        title :"ITS very very wet outside.....",
          icon:  "fas fa-cloud-sun-rain"
        }
    };
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            timer: ""
        };
       
    };
    WReport(lat, month) {
        if (month > 2 && month < 9) {
          return lat > 1 ? "summer" : "monsoon"
        } else {
            return lat > 1 ? "winter": "summer"
      }
    };

    render() {
        setInterval(() => {
            this.setState({ timer: new Date().toLocaleTimeString() });
        }, 1000);
        const season = this.WReport(this.props.lat, new Date().getMonth());

        const { title, icon } = this.wconfig[season];
        console.log(title, icon);
        if (season === "summer") {
            return (
                <div className={`container ${season}`}>
                   
                    <div className="row">
                        <div className="col-md-12">
                        <i className={icon} aria-hidden="true"></i>
                            <h1>{title}</h1>
                            <i className={icon} aria-hidden="true"></i>
                     </div>
                    </div>
                </div>
            ) 
        };
        if (season === "winter") {
            return (
                
                <div className={`container ${season}`}>
                     {this.state.timer}
                    <div className="row">
                        <div className="col-md-12">
                        <i className={icon} aria-hidden="true"></i>
                        <h1>{title}</h1>
                        <i className={icon} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>);
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <i className={icon} aria-hidden="true"></i>
                        <h1>{title}</h1>
                        <i className={icon} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>);
}
     
    }
};

export default Whether;