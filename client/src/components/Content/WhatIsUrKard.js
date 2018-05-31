import React, { Component } from "react";

import VideoPlayer from "../VideoPlayers/VideoPlayer";
import Video from "../../assets/videos/aboutUrKard.m4v";

import "../../assets/stylesheets/Video.css";

class WhatIsUrKard extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: 0
        }
    }
    componentWillMount(){
        let y = window.innerHeight;
        this.setState({
            height: y
        })
    }
    render(){
        const style = {
            container: {
                height: this.state.height
            },
            title: {
                color: "#7D8F9D",
                textAlign: "center",
            },
            text: {
                color: "#f5f5f5",
                lineHeight: 1.25,
                marginBottom: "10px",
                fontSize: "18px",
                textIndent: "20px"
            }
        };
        return (
            <div style={style.container}>
                <h1 style={style.title}>What is <strong style={{color: "orange"}}>urKARD</strong></h1>
                <VideoPlayer class={"aboutUrKardVideo"} src={Video}/>
                <p style={style.text}>
                    <strong style={{color: "orange"}}>urKARD</strong> is a mobile app on the App Store and Google Play store that prints plastic cards to any thermal image printer in the world as well as sending out a digital copy of the card as well.  <strong style={{color: "orange"}}>urKARD</strong> can capture pictures, scan driver’s licenses, capture video and process it to a QR code on a plastic card, can capture signatures, and can capture data on any individual and print a plastic card anywhere.  <strong style={{color: "orange"}}>urKARD</strong> is available for a free download on the App Store and the Google Play Store.
                </p>
            </div>
        )
    }
}

export default WhatIsUrKard;