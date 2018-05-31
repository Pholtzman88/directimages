import React, { Component } from "react";

import "../../assets/stylesheets/FlippableCard.css";

class FlippableContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            front: this.props.front || false,
            back: this.props.back || false,
            frontText: this.props.frontText || "flip to front",
            backText: this.props.backText || "flip to back"
        };

    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    };

    render(){
        const style = {
            front: {
                width: "100%",
                height: "340px",
                display: "inline-block",
                transform: "rotateY(180deg)",
            },
            back: {
                width: "100%",
                height: "340px",
                display: "inline-block"
            },
            button: {
                width: "60%",
                textAlign: "center",
                marginLeft: "17.5%"
            },
            text: {
                color: "white",
                lineHeight: 1.25,
                fontSize: "18px"
            }
        };

        const activeStyle = this.state.active ? style.front : style.back;
        const activeBtnText = this.state.active ? this.state.frontText : this.state.backText;

        return (
            <div className={"card-container"}>
                <div className="card" style={activeStyle}>
                    <div className={`card-front`}>
                        {this.state.front}
                    </div>
                    <div className={`card-back`}>
                        {this.state.back}
                    </div>
                </div>
                <div className={"button"} onClick={this.handleClick} style={style.button}>
                    <h3>{activeBtnText}</h3>
                </div>
            </div>
        );
    }
}

export default FlippableContent;