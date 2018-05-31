import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class FAQButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            link: this.props.link || "no link provided",
            styling: this.props.styling || {
                marginTop: "100px",
                marginLeft: "calc(50% - 150px)",
                width: '300px',
                height: '300px'
            }
        }
    }
    handleClick = () =>{
        return window.scrollTo(0,0)
    };

    render(){

        return (
            <NavLink to={this.state.link}>
            <div className={"FAQBtn"} style={this.state.styling} onClick={this.handleClick}>
                    <svg height="300px" id="SVGRoot" width="300px" version="1.1" viewBox="0 0 300 300">
                        <defs id="defs38887"/>
                        <g id="layer1">
                            <g id="g38885" style={{"strokeWidth":"0.84407669"}} transform="matrix(1.078322,0,0,1.3016305,-19.119859,-193.35613)">
                                <g id="g38827" style={{"fill":"#f8951e","fillOpacity":"1","strokeWidth":"0.74293327"}} transform="matrix(1.143617,0,0,1.1287131,19.822141,-15.799069)">
                                    <rect height="143.55469" id="rect38821" style={{"opacity":"1","fill":"#f8951e","fillOpacity":"1","stroke":"#55e7a6","strokeWidth":"0","strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"0","strokeOpacity":"1"}} width="220.3125" rx="5.6077285" ry="4.7889166" x="21.093752" y="145.50781"/>
                                    <path id="path38823" style={{"opacity":"1","fill":"#f8951e","fillOpacity":"1","stroke":"#55e7a6","strokeWidth":"0","strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"0","strokeOpacity":"1"}} d="m 186.40007,296.61811 c -1.5287,-1.1561 -29.52005,-22.83455 -29.28319,-24.73649 0.23686,-1.90195 32.69028,-16.05282 34.45584,-16.79866 1.76556,-0.74585 34.53533,-14.14784 36.06403,-12.99174 1.5287,1.1561 -2.44299,36.33701 -2.67985,38.23896 -0.23686,1.90194 -5.01528,36.98239 -6.78084,37.72823 -1.76557,0.74585 -30.24729,-20.28419 -31.77599,-21.4403 z"/>
                                </g>
                                <path id="path38850" style={{"fill":"#3c393d","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.84407669px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 219.14062,318.35938 35.74219,24.60937 -165.82031,-1.75781 -42.773438,36.91407 -0.878906,-39.25782 c 0,0 -25.488281,3.51562 -25.488281,-19.33594 0,-22.85156 -1.757813,-90.82031 -1.757813,-90.82031 l 21.09375,-0.29296 v 71.1914 c 0,0 -2.34375,16.99218 14.648438,17.57812 16.992187,0.58594 165.23437,1.17188 165.23437,1.17188 z"/>
                                <path id="path38868" style={{"fill":"#3c393d","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.84540588","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 219.14062,318.35938 35.74219,24.60937 -165.82031,-1.75781 -42.773438,36.91407 -0.878906,-39.25782 c 0,0 -25.488281,3.51562 -25.488281,-19.33594 0,-22.85156 -1.757813,-90.82031 -1.757813,-90.82031 l 21.09375,-0.29296 v 71.1914 c 0,0 -2.34375,16.99218 14.648438,17.57812 16.992187,0.58594 165.23437,1.17188 165.23437,1.17188 z"/>
                                <text id="text38872" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"101.30031586px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"none","strokeWidth":"0.84407669"}} transform="scale(1.001407,0.99859496)" x="68.776695" y="266.00247" xmlSpace="preserve">
                                    <tspan id="tspan38870" style={{"fontStyle":"normal","fontVariant":"normal","fontWeight":"normal","fontStretch":"normal","fontFamily":"Arial","InkscapeFontSpecification":"Arial","strokeWidth":"0.84407669"}} x="68.776695" y="266.00247">FAQ</tspan>
                                </text>
                            </g>
                        </g>
                    </svg>
            </div>
            </NavLink>
        )
    }
}

export default FAQButton;