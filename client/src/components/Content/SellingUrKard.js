import React, { Component } from "react";

import VideoPlayer from "../VideoPlayers/VideoPlayer";
import video from "../../assets/videos/distributors.m4v";
import poster from "../../assets/images/sellingPoster.PNG";

import "../../assets/stylesheets/Video.css";

class SellingUrKard extends Component {
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
                marginBottom: "20px"
            },
            text: {
                color: "#f5f5f5",
                lineHeight: 1.25,
                fontSize: "18px",
                textIndent: "20px",
                paddingTop: "10px"
            }
        };
        return (
            <div style={style.container}>
                <h1 style={style.title}> Selling <strong style={{color: "orange"}}>urKard</strong> </h1>
                <VideoPlayer class={'distributorVideo'} poster={poster} src={video}/>
                <p style={style.text}>
                    If you are a distributor in the printing industry specializing in selling thermal image printers, or if you are printer with thermal image printers or any type of printer with a Microsoft office compatible driver, our <strong style={{color: "orange"}}>urKARD</strong> can print to your printer and you can utilize it to sell more printers, ribbon, etc.  Help your customers utilize the printers you sold them with a system that is user friendly.
                </p>
                <p style={style.text}>
                    <strong style={{color: "orange"}}>urKARD</strong> is sold to distributors with a demo program and is activated by ID templates.  Simply send us a 1036x638g template and we can load it on <strong style={{color: "orange"}}>urKARD</strong> in less than a day and you can be printing cards in your office tomorrow.  <strong style={{color: "orange"}}>urKARD</strong> costs involve a set up fee and a per card charge.  <strong style={{color: "orange"}}>urKARD</strong> can also accept payment utilizing the internet Stripe payment program.  Contact <strong style={{color: "orange"}}>Peter@directimagecards.com</strong> for sales opportunities with <strong style={{color: "orange"}}>urKARD</strong>.
                </p>
            </div>
        )
    }
}

export default SellingUrKard;