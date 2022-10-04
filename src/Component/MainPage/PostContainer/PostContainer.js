import React, { Component } from "react";
import Post from "./Post";
import "./PostContainer.css";
import post1 from "../../../images/pic2.jpeg";
import post2 from "../../../images/pic3.jpeg";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
        }
    }
    
    getData=()=> {
        let json=[
            {
                "post_ID":1,
                "user_id": 12345,
                "user_img":"url:",
                "user_name": "profileName 01",
                "description":"Description of the Post",
                "post_img": post1,
                "Like": "25"
            },
            {
                "post_ID":2,
                "user_id": 12345,
                "user_img":"url:",
                "user_name": "profileName 02",
                "description":"Description of the Post of profileName 02",
                "post_img": post2,
                "Like": "125"
            }
        ]

        this.setState({data : json});
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return ( 
            <div>

                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                }
                
            </div>
        );
    }
}
 
export default PostContainer;