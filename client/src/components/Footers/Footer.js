import React, { Component } from "react";
import FAQButton from "../Buttons/FAQButton";
import DownloadApp from "../Content/DownloadApp";
import SocialMediaButtons from "../Content/SocialMediaButtons";

import "../../assets/stylesheets/Footer.css";

import background from "../../assets/images/footerBackground.jpg";

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: "",
            height: ""
        };
    }

    componentWillMount(){
        const x = window.innerWidth;
        const y = window.innerHeight;
        return this.setState({
            width: x,
            height: y
        })
    }

    render(){
        const style = {
            footer: {
                width: `100%`,
                height: `${this.state.height}px`,
                backgroundImage: `url(${background}`,
                backgroundSize: 'cover',
                zIndex: 2000,
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                borderTop: "50px solid #3C393D"
            },
            footerInfo: {
                flex: 9,
                width: "80%",
                marginLeft: "10%"
            },
            download: {
                flex: 4,
                width: "80%",
                marginLeft: "10%"
            },
            infoContainer: {
                display: "flex",
                flexDirection: "horizontal"
            },
            specialty: {
                flex: 5
            },
            cardContainer: {
                flex: 5,
                paddingTop: "150px"
            }
        };
        return (
            <div style={style.footer}>
                <div style={style.footerInfo}>
                    <div style={style.infoContainer}>
                        <div style={style.cardContainer}>

                            <DownloadApp/>

                        </div>
                        <div style={style.specialty}>

                            <FAQButton link={'/FAQ'}/>

                        </div>
                    </div>
                </div>
                <div style={style.download}>
                    <div>

                    <SocialMediaButtons/>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;