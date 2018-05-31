import React, { Component } from "react";

import "../../assets/stylesheets/VideoButton.css"

class PlayPauseButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        this.setState({
            display: this.props.display
        })
    }

    componentDidUpdate(){
        if (this.state.display !== this.props.display) return this.setState({display: this.props.display})
    }

    handleClick(){
        this.props.toggle();
    }

    render(){
        const getDisplay = () => this.state.display ? "inline-block" : "none";

        const style = {
            button: {
                position: "absolute",
                zIndex: 1000,
                bottom: "calc(50% - 50px)",
                left: "calc(50% - 50px)",
                display: getDisplay(),
                opacity: .8
            }
        };
        return (
            <div style={style.button} onClick={this.handleClick} className={"videoButton"}>
                <svg height="100px" id="SVGRoot" width="100px" version="1.1" viewBox="0 0 100 100">
                    <defs id="defs8824"/>
                    <g id="layer1">
                        <ellipse id="path9383" style={{"opacity":"1","fill":"#ff0000","fillOpacity":"1","stroke":"#ff007d","strokeWidth":"0","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.97802196"}} cx="50.195312" cy="50.390625" rx="50.195312" ry="50"/>
                        <path id="path9385" style={{"opacity":"1","fill":"#ffffff","fillOpacity":"1","stroke":"#ff007d","strokeWidth":"0","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.97802196"}} d="M 14.84375,75.390626 13.57797,51.3632 12.867343,27.312954 34.308594,38.230469 55.492032,49.640171 35.316561,62.750082 Z" transform="matrix(0.78005705,0,0,0.84562741,7.1269562,8.1226214)"/>
                        <rect height="47.265625" id="rect9387" style={{"opacity":"1","fill":"#ffffff","fillOpacity":"1","stroke":"#ff007d","strokeWidth":"0","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.97802196"}} width="8.203125" rx="7.4662498e-015" ry="5.9036102" x="57.8125" y="27.34375"/>
                        <rect height="47.265625" id="rect9387-0" style={{"opacity":"1","fill":"#ffffff","fillOpacity":"1","stroke":"#ff007d","strokeWidth":"0","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.97802196"}} width="8.203125" rx="7.4662498e-015" ry="5.9036102" x="75.195312" y="27.148438"/>
                    </g>
                </svg>
            </div>

        )
    }
}

export default PlayPauseButton;