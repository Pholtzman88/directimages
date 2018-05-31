import React, { Component } from "react";

class VideoPlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            class: this.props.class || "",
            src: this.props.src || "",
            type: this.props.type || "",
            poster: this.props.poster || "",
            autoplay: this.props.autoplay || false
        };
    }


    render(){

        return (
            <div className={this.state.class} onMouseEnter={this.showButton} onMouseLeave={this.hideButton}>
                <video width="100%" height="100%" poster={this.state.poster} controls autoPlay={this.state.autoplay}>
                    <source src={this.state.src} type={this.state.type}/>
                </video>
            </div>
        )
    }
}

export default VideoPlayer;