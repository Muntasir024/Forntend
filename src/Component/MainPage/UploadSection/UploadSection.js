import { Avatar, Paper } from "@material-ui/core";
import React, { Component } from "react";
import dp from "../../../images/dp6.png";
import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";
import "./UploadSection.css"

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Paper className="upload__container">
                <div className="upload__top">
                    <div>
                        <Avatar src= {dp} className="upload__img"/>
                    </div>
                    <div>
                        <input className="upload__box" placeholder="What's on your mind?" type="text" />
                    </div>
                </div>
                <div className="upload__bottom">
                    <div className="upload__tabs">
                        <img src={live} width="35px" />
                        <div className="upload__text">Live Video</div>
                    </div>
                    <div className="upload__tabs">
                        <img src={image}  width="35px"/>
                        <div className="upload__text">Photo/Video</div>
                    </div>
                    <div className="upload__tabs">
                        <img src={feeling}  width="35px"/>
                        <div className="upload__text">Feelings/Activity</div>
                    </div>
                </div>
                </Paper>
            </div>
        );
    }
}
 
export default UploadSection;