import React, { Component } from "react";

import FlippableContent from "../Content/FlippableContent";
import listImg from "../../assets/images/kidPrint.png";

import "../../assets/stylesheets/JoiningUrKard.css";

class JoiningUrKard extends Component {
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
                color: "white",
                lineHeight: 1.25,
                padding: "10px",
                fontSize: "18px",
                textIndent: "20px"
            },
            list: {
                color: "white",
                lineHeight: 1.25,
                paddingTop: "10px",
                fontSize: "16px",
                marginLeft: "100px"
            }
        };
        return (
            <div style={style.container}>
                <h1 style={style.title}>Joining <strong style={{color: "orange"}}>urKard</strong></h1>
                <FlippableContent
                    front = {
                        (
                            <div>
                                <p style={style.text}><strong style={{color: "orange"}}>urKard</strong> is accepting applications to be on our roller bar and to sell your cards on the App
                                Store and Google Play Stores.  Currently we have the following cards on the app:</p>
                                <ul>
                                    <li style={style.list}> <strong style={{color: "orange"}}>kidprint </strong> (child ID card that can help your child in an emergency – comes with fingerprint and video as a QR code on the card).</li>
                                    <li style={style.list}> <strong style={{color: "orange"}}>MedTags</strong> (a medical ID card for people that has their medical information including prescription and vital health info that first responders are trained to look for).</li>
                                    <li style={style.list}><strong style={{color: "orange"}}>Autism Card</strong> (a card that helps Autistic persons in emergency situations – comes with video)</li>
                                    <li style={style.list}><strong style={{color: "orange"}}>Tags for Hope</strong> (a pet id card for your pet that comes with a video program to help find your pet if they are lost)</li>
                                </ul>
                            </div>
                        )
                }
                    back = {
                        (
                            <div>
                                <p style={style.text}>What types of cards would we like to join our family?</p>
                                <ul>
                                    <li style={style.list}><strong style={{color: "orange"}}>Luggage Tags</strong></li>
                                    <li style={style.list}><strong style={{color: "orange"}}>Souvenir Cards</strong></li>
                                    <li style={style.list}><strong style={{color: "orange"}}>Fan Cards</strong> – we can impose a celebrity in the picture with the fan who is downloading the   picture – the QR code could have one of the celebrities songs or a special video from the celebrity.</li>
                                    <li style={style.list}><strong style={{color: "orange"}}>Food cards</strong> – allergies, fav food recipes, etc.</li>
                                    <li style={style.list}><strong style={{color: "orange"}}>Cruise Ships</strong> – we can design tags for you that your customers can fill out before they get on the ship.</li>
                                    <li style={style.list}><strong style={{color: "orange"}}>Your idea</strong> – pitch us a program – we split the costs with you – you get the larger percentage because you are responsible for printing the cards.</li>
                                </ul>
                                <p style={style.text}>DirectImage Cards will work with you to help you succeed.  We offer low cost entry into a business and a partnership and a plan that works.  Contact us at <strong style={{color: "orange"}}>urKARDapp@directimagecards.com</strong> for further details.</p>
                            </div>
                        )
                }
                    frontText = {
                        "What type of cards are currently supported?"
                    }

                    backText = {
                        "What type of cards would we like to join our family?"
                    }
                />
            </div>
        )
    }
}

export default JoiningUrKard;