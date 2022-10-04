import React, { Component } from "react";
import ImageLayout from "./ImageLayout";
import "./RightSide.css";
import dp9 from "../../../images/dp9.png";
import dp8 from "../../../images/dp8.png";
import dp7 from "../../../images/dp7.png";
import dp3 from "../../../images/dp3.png";
import dp4 from "../../../images/dp4.png";

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         };
    }

    getData=()=> {
        let jsondata = [
            {
                "image": dp9,
                "text": "Anisul Hoque"
            },
            {
                "image": dp8,
                "text": "Samsul Rahman"
            },
            {
                "image": dp7,
                "text": "Taylor Swift"
            },
            {
                "image": dp3,
                "text": "Tanvir Rahman"
            },
            {
                "image": dp4,
                "text": "Humayon Ahmed"
            }
        ];
        this.setState({data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }
    
    render() { 
        return ( 
            <div className="rightside__container">
                <div className="rightside__header">

                </div>
            <div className="rightside__content">

                {
                    this.state.data.map( (item) => (
                        <ImageLayout image={item.image} text={item.text} />
                    ))
                }
                
            </div>
            </div>
        );
    }
}
 
export default RightSide;