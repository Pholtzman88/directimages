import React, { Component } from "react";

import "../../assets/stylesheets/ScrollContent.css";

class ScrollContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            contents: this.props.contents || []
        }
    }

    render(){

        return (
            <div className="scrollContentContainer">
                {this.props.children}
            </div>
        )
    }
}

export default ScrollContent;