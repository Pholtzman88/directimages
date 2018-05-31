import React, { Component } from "react";
import backgroundImg from "../../assets/images/licenseScanningBackground.png";
import VideoPlayer from "../VideoPlayers/VideoPlayer";
import video from "../../assets/videos/harley.mp4";
import poster from "../../assets/images/eventMarketing.PNG";
import "../../assets/stylesheets/Video.css";

class EventMarketingService extends Component {
    render(){
        const style = {
            container: {
                width: window.innerWidth - 120,
                height: window.innerHeight - 200,
                backgroundColor: '#5524A6',
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                textAlign: 'center',
                display: 'inline-block'
            },
            title: {
                backgroundColor: "#3C393D",
                color: '#F7951E'
            }
        };

        return (
            <div style={style.container}>
                <h1 style={style.title}>Event Marketing</h1>
                <VideoPlayer class={"carousel-video"} src={video} poster={poster}/>
            </div>
        )
    }
}

export default EventMarketingService;