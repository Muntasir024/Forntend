import { Paper } from "@material-ui/core";
import React, { Component } from "react";
import "./StatusBar.css";

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Paper className="statusbar__status"/>
            </div>
        );
    }
}
 
export default Status;