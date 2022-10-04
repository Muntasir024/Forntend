import React, { Component } from "react";
import ImageLayout from "./ImageLayout";
import "./LeftSide.css"
import dp from "../../../images/dp6.png";
import covid from "../../../images/covid.png";
import groups from "../../../images/groups.svg";
import memories from "../../../images/memories.png";
import admanager from "../../../images/admanager.png";
import blood from "../../../images/blood.png";
import business from "../../../images/business.png";

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         };
    }

    getData=()=> {
        let jsondata = [
            {
                "image": dp,
                "text": "profileName"
            },
            {
            "image": covid,
            "text": "COVID-19 Information Centre"
            },
            {
                "image": groups,
                "text": "Groups"
            },
            {
                "image": memories,
                "text": "Memories"
            },
            {
                "image": admanager,
                "text": "Ads Manager"
            },
            {
                "image": blood,
                "text": "Blood Donations"
            },
            {
                "image": business,
                "text": "Business Manager"
            }
        ];
        this.setState({data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }
    
    render() { 
        return ( 
            <div>

                {
                    this.state.data.map( (item) => (
                        <ImageLayout image={item.image} text={item.text} />
                    ))
                }
                
            </div>
        );
    }
}
 
export default LeftSide;