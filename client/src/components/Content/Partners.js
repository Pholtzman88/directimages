import React, { Component } from "react";

import DigitalSynergiesLogo from "../../assets/images/digitalSynergiesLogo.jpg";
import TotalIDLogo from "../../assets/images/totalIDSolutionsLogo.jpg";
import SecureIDLogo from "../../assets/images/secureIDLogo.jpg";
import ISCLogo from "../../assets/images/idSystemGroupLogo.jpg";
import ACTLogo from "../../assets/images/ACTlogo.png";

import "../../assets/stylesheets/Partners.css";


class Partners extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            currentLinkText: ''
        };
        this.handleMouseLeaveSecureID = this.handleMouseLeaveSecureID.bind(this);
        this.handleMouseEnterSecureID = this.handleMouseEnterSecureID.bind(this);

        this.handleMouseEnterDigital = this.handleMouseEnterDigital.bind(this);
        this.handleMouseLeaveDigital = this.handleMouseLeaveDigital.bind(this);

        this.handleMouseEnterACT = this.handleMouseEnterACT.bind(this);
        this.handleMouseLeaveACT = this.handleMouseLeaveACT.bind(this);

        this.handleMouseEnterISG = this.handleMouseEnterISG.bind(this);
        this.handleMouseLeaveISG = this.handleMouseLeaveISG.bind(this);

        this.handleMouseEnterTotalID = this.handleMouseEnterTotalID.bind(this);
        this.handleMouseLeaveTotalID = this.handleMouseLeaveTotalID.bind(this);
    }
    componentWillMount(){
        let y = window.innerHeight;
        this.setState({
            height: y
        });

    }
    handleMouseEnterSecureID(){
        this.setState({
            currentLinkText: "https://www.secureidcard.biz/"
        })
    }
    handleMouseLeaveSecureID(){
        this.setState({
            currentLinkText: ""
        })
    }
    handleMouseEnterDigital(){
        this.setState({
            currentLinkText: "http://digitalsynergyads.com/"
        })
    }
    handleMouseLeaveDigital(){
        this.setState({
            currentLinkText: ""
        })
    }
    handleMouseEnterTotalID(){
        this.setState({
            currentLinkText: "http://www.totalidsolutions.com/"
        })
    }
    handleMouseLeaveTotalID(){
        this.setState({
            currentLinkText: ""
        })
    }
    handleMouseEnterISG(){
        this.setState({
            currentLinkText: "https://www.identificationsystemsgroup.com/"
        })
    }
    handleMouseLeaveISG(){
        this.setState({
            currentLinkText: ""
        })
    }
    handleMouseEnterACT(){
        this.setState({
            currentLinkText: "http://www.actcda.com/"
        })
    }
    handleMouseLeaveACT(){
        this.setState({
            currentLinkText: ""
        })
    }
    render(){
        const style = {
            container: {
                textAlign: "center",
                marginBottom: '200px'
            },
            wrapper: {
                height: "400px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                border: "5px solid #8600F9",
                borderRadius: "25px"
            },
            SecureIDImg: {
                width: "300px",
                height: "100px",
                padding: "30px"
            },
            DigitalSImg: {
                width: "300px",
                height: "100px",
                padding: "30px"
            },
            TotalIDImg: {
                width: "200px",
                height: "200px",
                padding: "30px"
            },
            ISCImg: {
                width: "200px",
                height: "200px",
                padding: "30px"
            },
            ACTImg: {
                width: "200px",
                height: "200px",
                padding: "30px"
            }
        };
        return (
            <div style={style.container}>
            <div style={style.wrapper}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="https://www.secureidcard.biz/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnterSecureID} onMouseLeave={this.handleMouseLeaveSecureID}>
                        <img className={"img"} src={SecureIDLogo} alt="secureID" style={style.SecureIDImg}/>
                    </a>
                    <a href="http://digitalsynergyads.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnterDigital} onMouseLeave={this.handleMouseLeaveDigital}>
                        <img className={"img"} src={DigitalSynergiesLogo} alt="digitial synergies" style={style.DigitalSImg}/>
                    </a>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="http://www.totalidsolutions.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnterTotalID} onMouseLeave={this.handleMouseLeaveTotalID}>
                        <img className={"img"} src={TotalIDLogo} alt="totalID" style={style.TotalIDImg}/>
                    </a>
                    <a href="https://www.identificationsystemsgroup.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnterISG} onMouseLeave={this.handleMouseLeaveISG}>
                        <img className={"img"} src={ISCLogo} alt="Identification systems group" style={style.ISCImg}/>
                    </a>
                    <a href="http://www.actcda.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnterACT} onMouseLeave={this.handleMouseLeaveACT}>
                        <img className={"img"} src={ACTLogo} alt="act" style={style.ACTImg}/>
                    </a>
                </div>
            </div>
            <h1 style={{color: "#F7951E"}}>{this.state.currentLinkText}</h1>
        </div>
        )
    }
}

export default Partners;