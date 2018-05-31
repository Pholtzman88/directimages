import React, { Component } from "react";

import brochure from "../../assets/files/brochure.zip";

class DownloadBrochureButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: "white"
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(){
        this.setState({
            color: "orange"
        })
    }

    handleMouseLeave(){
        this.setState({
            color: "white"
        })
    }

    render(){
        const color = this.state.color;
        const style = {
            container: {
                width: "270px",
                marginBottom: '10px',
                marginLeft: "calc(50% - 180px)"
            },
            rect: {
                "opacity":"1",
                "fill":"none",
                "fillOpacity":"1",
                "stroke": color,
                "strokeWidth":"10",
                "strokeLinecap":"butt",
                "strokeLinejoin":"round",
                "strokeMiterlimit":"4",
                "strokeDasharray":"none",
                "strokeOpacity":"0.97802196"
            },
            text: {
                "fontStyle":"normal",
                "fontVariant":"normal",
                "fontWeight":"normal",
                "fontStretch":"normal",
                "fontSize":"27.77980423px",
                "lineHeight":"1.25",
                "fontFamily":"'Sonic Extra'",
                "InkscapeFontSpecification":"'Sonic Extra'",
                "letterSpacing":"0px",
                "wordSpacing":"0px",
                "fill":color,
                "fillOpacity":"1",
                "stroke":color,
                "strokeWidth":"0.99999994",
                "strokeOpacity":"0.97802196"
            },
            span: {
                "fontStyle":"normal",
                "fontVariant":"normal",
                "fontWeight":"normal",
                "fontStretch":"normal",
                "fontFamily":"'Sonic Extra'",
                "InkscapeFontSpecification":"'Sonic Extra'",
                "fill":color,
                "fillOpacity":"1",
                "stroke":color,
                "strokeWidth":"0.99999994",
                "strokeOpacity":"0.97802196"
            }
        };

        return (
            <div style={style.container} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <a href={brochure}>
                    <svg height="75px" id="SVGRoot" width="320px" version="1.1" viewBox="0 0 250 75">
                        <defs id="defs9988"/>
                        <g id="layer1">
                            <rect height="65" id="rect9963" style={style.rect} width="270" rx="20" ry="20" x="5" y="5"/>
                            <text id="text9967" style={style.text} transform="scale(0.73656015,1.3576624)" x="28.203808" y="36.099125" xmlSpace="preserve">
                                <tspan id="tspan9965" style={style.span} x="28.203808" y="36.099125">DOWNLOAD BROCHURE</tspan>
                            </text>
                        </g>
                    </svg>
                </a>
            </div>
        )
    }
}

export default DownloadBrochureButton;