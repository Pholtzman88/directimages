import React, { Component } from "react";

import "../../assets/stylesheets/FlippableCard.css";

class FlippableCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            front: this.props.front || "no front",
            back: this.props.back || "no back"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            active: !this.state.active
        });
        console.log(this.state)
    }

    render(){
        const style = {
            active: {
                width: "420px",
                height: "300px",
                display: "inline-block",
                backgroundColor: "blue",
                transform: "rotateY(180deg)",
            },
            inActive: {
                width: "420px",
                height: "300px",
                display: "inline-block",
                backgroundColor: "red"
            }
        };

        const activeStyle = this.state.active ? style.active : style.inActive;
        return (
            <div className={"card-container"}>
                <div className="card" style={activeStyle} onClick={this.handleClick}>
                    <div className={`card-front ${this.state.front}`} />
                    <div className={`card-back ${this.state.back}`} />
                </div>
            </div>
        );
    }
}

export default FlippableCard;