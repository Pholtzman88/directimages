import React, { Component } from "react";

class Introduction extends Component {
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
                paddingTop: "10px",
                fontSize: "18px",
                textIndent: "20px"
            }
        };
        return (
            <div style={style.container}>
                <h1 style={style.title}>Introduction</h1>
                <p style={style.text}>
                    DirectImage Cards was established in 2012.  We launched our <strong style={{color: "orange"}}>urKARD</strong> mobile app originally to capture photos on a souvenir card and instantly issue cards at events.  urKARD evolved and was launched on the App Store in November of 2017 and on the Google Play Store in December of 2017.
                </p>
                <p style={style.text}>
                    DirectImage Cards offers <strong style={{color: "orange"}}>urKARD</strong> in two distinct ways.  Our <strong style={{color: "orange"}}>urKARD</strong> app is sold to distributors who utilize it to sell Thermal Image Printers, Ribbons, etc.  urKARD can help organizations issue employees ID badges as employees can download the free app, fill out all the information, take a selfie and the card prints in the distributor or the HR office 30 seconds later.
                </p>
                <p style={style.text}>
                    DirectImage Cards also sells cards on <strong style={{color: "orange"}}>urKARD</strong>.  We have several templates on <strong style={{color: "orange"}}>urKARD</strong> ranging from Med Tags (a medical ID card that has your prescriptions and can help you in an emergency) kid print ( a child find card that has a fingerprint and video to help find your child in an emergency) and an Autism Card that can assist Autistic individuals in emergency situations as well.  Ask us how you can sell cards off the App Store and the Google Play Store with your own template.
                </p>
            </div>
        )
    }
}

export default Introduction;