import React, { Component } from "react";

import backgroundImg from "../../assets/images/fingerPrintBackground.png";
import "../../assets/stylesheets/Video.css";
import VideoPlayer from "../VideoPlayers/VideoPlayer";
import video from "../../assets/videos/License.mp4";
import poster from "../../assets/images/fingerprint.PNG";

class FingerPrintService extends Component {
    render(){
        const style = {
            container: {
                width: window.innerWidth - 120,
                height: window.innerHeight - 200,
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                textAlign: 'center',
                display: 'inline-block',
                borderRight: '50px solid #3C393D'
            },
            title: {
                backgroundColor: "#3C393D",
                color: '#F7951E'
            }
        };

        return (
            <div style={style.container}>
                <h1 style={style.title}>Finger Print Scanning</h1>
                <VideoPlayer class={"carousel-video"} poster={poster} src={video}/>
            </div>
        )
    }
}

export default FingerPrintService;