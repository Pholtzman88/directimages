import React, { Component } from "react";

class SocialMediaButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            icon: this.props.icon || 'no icon provided',
            link: this.props.link || 'no link provided'
        }
    }

    render(){
        return (
            <div>
                <a href={this.state.link} target={'_blank'}>
                    {this.state.icon}
                </a>
            </div>
        )
    }
}

export default SocialMediaButton;