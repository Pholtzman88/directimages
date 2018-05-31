import React, { Component} from "react";
import "../../assets/stylesheets/About.css";

import SideBarNav from "../Nav/SideBarNav";
import ScrollContent from "../Content/ScrollContent";

import WhatIsUrKard from "../Content/WhatIsUrKard";
import SellingUrKard from "../Content/SellingUrKard";
import JoiningUrKard from "../Content/JoiningUrKard";
import Partners from "../Content/Partners";

class Web extends Component{
    constructor(props){
        super(props);
        this.state = {
            sideBarNavBtns: [
                {
                    id: "mobileLink",
                    text: "What is urKard",
                    hover: false,
                    selected: false,
                    svg: (<svg height="100px" id="SVGRoot" width="180px" version="1.1" viewBox="0 0 180 100">
                        <defs id="defs12079"/>
                        <g id="layer1">
                            <g id="g12047" style={{"strokeWidth":"1.14842463"}} transform="matrix(0.78120032,-0.42271568,0.45632758,0.72365917,-25.916321,34.578751)">
                                <rect height="196.10271" id="rect5403-7-7-3" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14842463","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="112.90231" rx="16.868763" ry="16.194736" transform="rotate(-60)" x="-75.091789" y="30.2031"/>
                                <rect height="192.77266" id="rect5403-0-6-5-0" style={{"opacity":"1","fill":"#ffffff","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="110.14017" rx="16.868763" ry="16.194736" transform="rotate(-60)" x="-73.529472" y="31.448126"/>
                                <path id="path5480-17-4-4" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14842463px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 16.904111,96.619178 c 0,0 -1.529933,1.9829 1.269621,3.660332 0,0 4.915198,2.94749 7.808781,4.5412 4.055124,2.23338 4.920764,0.0219 4.920764,0.0219 z"/>
                                <path id="path5480-1-3-1-8" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14842463px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 30.903277,104.84261 c 0,0 -1.529933,1.98291 1.269621,3.66034 0,0 4.915198,2.94748 7.80878,4.54119 4.055124,2.23338 4.920764,0.0219 4.920764,0.0219 z"/>
                                <path id="path5480-0-2-7-0" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14842463px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 73.980202,-0.85081788 c 0,0 0.95228,-2.31641002 3.80475,-0.73064002 0,0 5.0102,2.78294 7.83719,4.49201 3.96172,2.39515 2.47935,4.25055 2.47935,4.25055 z"/>
                                <circle id="path5518-8-8-5-7-80" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.28710616","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-35.310665" cy="38.361473" r="1.375" transform="rotate(-60)"/>
                                <rect height="140" id="rect5581-0-3-4" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="100" transform="rotate(-60)" x="-68.62249" y="57.849052"/>
                                <circle id="path5518-8-8-5-7-8-87" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.28710616","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-40.185421" cy="38.324577" r="1.375" transform="rotate(-60)"/>
                                <circle id="path5518-8-8-5-7-4-9" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.28710616","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="19.933325" cy="37.795433" r="2.875" transform="rotate(-60)"/>
                                <rect height="3" id="rect5843-2" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="28.320312" rx="2.2491684" ry="2.1592982" transform="rotate(-60)" x="-31.658869" y="36.979469"/>
                                <rect height="9.4948416" id="rect5845-8" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="38.842537" rx="3.3737528" ry="3.2389469" transform="rotate(-60)" x="-38.950253" y="206.58083"/>
                                <rect height="7.6500001" id="rect5845-5-1" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57421225","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="36.660999" rx="3.3737524" ry="3.2389474" transform="rotate(-60)" x="-37.968868" y="207.52544"/>
                                <path id="path5903-5" style={{"fill":"#000000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.11484247","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 190.93199,90.555798 0.43731,-0.72024 c 0,0 -1.46308,-0.1086 -3.11643,2.19677 -1.43436,2.48437 -1.89839,3.84643 -1.89839,3.84643 l -0.45792,-0.21185 -0.42065,2.25467 1.64557,-1.54746 -0.44657,-0.23149 c 0,0 2.04965,-5.78341 4.25707,-5.58683 z"/>
                                <path id="path5905-5" style={{"fill":"#000000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.11484247","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 192.36464,91.330348 0.40981,-0.70982 c 0,0 1.86218,0.49677 -0.69162,5.06897 -2.55384,4.572172 -2.54997,4.416672 -2.54997,4.416672 l 0.56086,-1.753082 c 0,0 1.38977,-2.22094 2.14875,-3.83334 0.75899,-1.61239 0.91859,-2.78215 0.12219,-3.18938 z"/>
                                <path id="path5907-0" style={{"fill":"#000000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.11484247","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 155.75758,154.29736 -2.62717,-1.42905 5.79316,-10.03405 2.49345,1.43959 -0.37266,0.64548 -1.83707,-1.02161 -4.9801,8.62578 1.87362,1.15991 z"/>
                                <rect height="0.73242188" id="rect5909-41" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.11484247","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="7.4449897" transform="rotate(-60)" x="-53.749203" y="212.20183"/>
                                <rect height="0.73242188" id="rect5909-4-12" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.11484247","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="7.4449897" transform="rotate(-60)" x="-53.777584" y="214.15495"/>
                                <path id="path5439-8" style={{"fill":"#000000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 131.8247,163.29781 15.70799,9.20997 c 0,0 11.72955,4.54304 17.46652,-4.70314 5.73697,-9.24618 11.91361,-20.02464 11.91361,-20.02464 0,0 -1.03845,-2.14589 -2.16689,-1.16434 -0.81071,-0.66741 -5.08435,5.59783 -9.79309,12.13558 -6.04714,7.87937 -13.20887,9.31189 -20.73035,6.46736 -4.86222,-1.59114 -10.92973,-4.60295 -10.92973,-4.60295 0,0 -2.13466,-1.6211 -3.08414,0.0234 -0.94949,1.64455 1.61609,2.6587 1.61609,2.6587 z"/>
                                <path id="path5439-3-03" style={{"fill":"#000000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 14.327126,95.543688 -15.8300586,-8.99854 c 0,0 -9.7991684,-7.886556 -4.660226,-17.478006 5.138942,-9.59145 11.3850403,-20.32981 11.3850403,-20.32981 0,0 2.377621,-0.17362 2.091799,1.29442 0.983349,0.36839 -2.305685,7.20209 -5.6131773,14.54885 -3.800164,9.17666 -1.459901,16.09516 4.7642793,21.18669 3.8090733,3.415226 9.4511393,7.163936 9.4511393,7.163936 0,0 2.471242,1.03813 1.521762,2.68268 -0.949485,1.64455 -3.110553,-0.0702 -3.110553,-0.0702 z"/>
                                <path id="path5439-2-74" style={{"fill":"#000000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 188.01663,64.570552 15.83006,8.99853 c 0,0 9.79916,7.88656 4.66022,17.478016 -5.13895,9.591452 -11.38504,20.329812 -11.38504,20.329812 0,0 -2.37763,0.17362 -2.0918,-1.29442 -0.98335,-0.36839 2.30568,-7.20208 5.61317,-14.548852 3.80017,-9.17665 1.4599,-16.095156 -4.76427,-21.186676 -3.80908,-3.41523 -9.45114,-7.16396 -9.45114,-7.16396 0,0 -2.47124,-1.03812 -1.52176,-2.68267 0.94948,-1.64456 3.11055,0.0702 3.11055,0.0702 z"/>
                                <path id="path5439-7-6" style={{"fill":"#000000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.57421231","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 71.432482,-3.2196879 -15.70799,-9.2099601 c 0,0 -11.72955,-4.54305 -17.466515,4.7031298 -5.736968,9.2461803 -11.91361,20.0246402 -11.91361,20.0246402 0,0 1.038451,2.14589 2.166899,1.16434 0.810709,0.66741 5.084344,-5.5978199 9.793083,-12.1355799 6.047133,-7.8793703 13.208873,-9.3118903 20.730353,-6.4673603 4.86221,1.5911403 10.92972,4.60296032 10.92972,4.60296032 0,0 2.13467,1.62108998 3.08415,-0.0234 0.94948,-1.64456002 -1.6161,-2.65871002 -1.6161,-2.65871002 z"/>
                            </g>
                        </g>
                    </svg>)
                },
                {
                    id: "processLink",
                    text: "Selling urKard",
                    hover: false,
                    selected: false,
                    svg: (<svg height="100px" id="SVGRoot" width="180px" version="1.1" viewBox="0 0 180 100">
                        <defs id="defs12079"/>
                        <g id="layer1">
                            <g id="g12844" style={{"strokeWidth":"1.14380598"}} transform="matrix(-0.91256062,0,0,-0.837594,320.99191,172.62905)">
                                <rect height="196.10271" id="rect5403-4" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14380598","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="112.90231" rx="17.908438" ry="16.437263" transform="rotate(90)" x="90.123352" y="-351.17636"/>
                                <rect height="192.77266" id="rect5403-0-5" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57190299","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="110.14017" rx="17.908438" ry="16.437263" transform="rotate(90)" x="91.685638" y="-349.9313"/>
                                <g id="g5437-1" style={{"fill":"#3c393d","fillOpacity":"1","strokeWidth":"1.14380598"}} transform="rotate(90,56.692772,464.11647)">
                                    <ellipse id="path1403-5-4-3-1-08-2-8" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.1442759","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-426.55936" cy="-81.76815" rx="8.1888857" ry="7.749506" transform="matrix(0.43869693,-0.89863508,0.9156741,0.40192156,0,0)"/>
                                    <ellipse id="path1403-5-4-3-1-08-2-1-6" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57240742","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-425.99969" cy="-77.696289" rx="6.9832535" ry="6.7148404" transform="matrix(0.44749881,-0.89428453,0.91926245,0.3936452,0,0)"/>
                                </g>
                                <rect height="5.4309659" id="rect5478-22" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57190293","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="37.073883" rx="5.9694796" ry="5.4790883" transform="rotate(90)" x="129.19501" y="-337.89035"/>
                                <path id="path5480-01" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14380598px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 323.53038,89.992536 c 0,0 0.33351,-2.48221 -2.92969,-2.53513 0,0 -5.73043,-0.095 -9.0332,-0.0284 -4.62853,0.0934 -4.27246,2.44141 -4.27246,2.44141 z"/>
                                <path id="path5480-1-1" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14380598px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 307.29503,89.870416 c 0,0 0.33351,-2.48221 -2.92969,-2.53513 0,0 -5.73043,-0.095 -9.0332,-0.0284 -4.62853,0.0934 -4.27246,2.44141 -4.27246,2.44141 z"/>
                                <path id="path5480-0-9" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14380598px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 324.93571,202.94208 c 0,0 0.33351,2.48221 -2.92969,2.53513 0,0 -5.73043,0.095 -9.0332,0.0284 -4.62853,-0.0934 -4.27246,-2.44141 -4.27246,-2.44141 z"/>
                                <rect height="7.1668305" id="rect5478-2-9" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.28595147","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="37.91103" rx="5.9694791" ry="5.4790883" transform="rotate(90)" x="128.77908" y="-338.702"/>
                                <ellipse id="path5518-6-87" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.2859515","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="147.22513" cy="-342.26981" rx="1.9304829" ry="2.004128" transform="rotate(90)"/>
                                <ellipse id="path5518-8-8-4" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.2859515","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="147.22513" cy="-342.25174" rx="2.2583008" ry="2.2835827" transform="rotate(90)"/>
                                <ellipse id="path5518-6-8-5" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.2859515","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="123.58429" cy="-335.20438" rx="1.9304829" ry="2.004128" transform="rotate(90)"/>
                                <ellipse id="path5518-8-8-8-2" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.2859515","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="123.58429" cy="-335.18631" rx="2.2583008" ry="2.2835827" transform="rotate(90)"/>
                                <rect height="6.5" id="rect5571-9" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57190299","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="6.5" transform="rotate(90)" x="142.02222" y="-173.84744"/>
                                <rect height="140" id="rect5581-23" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57190299","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="100" transform="rotate(90)" x="96.592621" y="-323.53036"/>
                            </g>
                        </g>
                    </svg>)
                },
                {
                    id: "availableLink",
                    text: "Joining urKard",
                    hover: false,
                    selected: false,
                    svg: (<svg height="100px" id="SVGRoot" width="180px" version="1.1" viewBox="0 0 180 100">
                        <defs id="defs12079"/>
                        <g id="layer1">
                            <g id="g12922" transform="rotate(-180,89.999999,50.000056)">
                                <rect height="178.4966" id="rect5403-7-8" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.00000036","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="94.61367" rx="14.999941" ry="14.999949" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)" x="3.6930697" y="-178.87843"/>
                                <rect height="175.46553" id="rect5403-0-6-4" style={{"opacity":"1","fill":"#ffffff","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.50000018","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="92.29895" rx="14.999941" ry="14.999949" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)" x="5.0022874" y="-177.74522"/>
                                <g id="g5437-3-1" style={{"fill":"#3c393d","fillOpacity":"1","strokeWidth":"1.14498937"}} transform="matrix(0.00610559,0.83799132,-0.91020264,0.0056212,335.23955,267.52968)">
                                    <ellipse id="path1403-5-4-3-1-08-2-50-2" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1.14545977","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-426.55936" cy="-81.76815" rx="8.1888857" ry="7.749506" transform="matrix(0.43869693,-0.89863508,0.9156741,0.40192156,0,0)"/>
                                    <ellipse id="path1403-5-4-3-1-08-2-1-2-16" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.57299966","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-425.99969" cy="-77.696289" rx="6.9832535" ry="6.7148404" transform="matrix(0.44749881,-0.89428453,0.91926245,0.3936452,0,0)"/>
                                </g>
                                <rect height="4.9433737" id="rect5478-4-6" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.50000012","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="31.068415" rx="4.9999804" ry="4.9999833" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)" x="36.435646" y="-166.78525"/>
                                <path id="path5480-17-98" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 153.7377,2.6340529 c 0,0 0.2884,-2.08194237 -2.68209,-2.1079475 0,0 -5.21644,-0.0473978 -8.22221,0.0269839 -4.21234,0.10428785 -3.8739,2.0699044 -3.8739,2.0699044 z"/>
                                <path id="path5480-1-3-6" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 138.95949,2.6229837 c 0,0 0.28841,-2.08194663 -2.68208,-2.10794758 0,0 -5.21645,-0.0473978 -8.22222,0.0269755 -4.21233,0.10428366 -3.87389,2.06990028 -3.87389,2.06990028 z"/>
                                <path id="path5480-0-2-5" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 155.70647,97.276895 c 0,0 0.3187,2.078198 -2.65115,2.14089 0,0 -5.21527,0.111816 -8.22187,0.07458 -4.21347,-0.05229 -3.90371,-2.021876 -3.90371,-2.021876 z"/>
                                <rect height="6.5233922" id="rect5478-2-8-5" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.25000006","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="31.769958" rx="4.99998" ry="4.9999833" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)" x="36.087097" y="-167.52402"/>
                                <ellipse id="path5518-6-3-3" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.25000009","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="51.545151" cy="-170.77156" rx="1.6177708" ry="1.8241973" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)"/>
                                <ellipse id="path5518-8-8-5-8" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.25000009","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="51.545151" cy="-170.75511" rx="1.8924866" ry="2.0785627" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)"/>
                                <ellipse id="path5518-6-8-4-3" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.25000009","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="31.733795" cy="-164.34047" rx="1.6177708" ry="1.8241973" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)"/>
                                <ellipse id="path5518-8-8-8-9-8" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.25000009","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="31.733795" cy="-164.32402" rx="1.8924866" ry="2.0785627" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)"/>
                                <rect height="5.91643" id="rect5571-3-8" style={{"opacity":"1","fill":"none","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.50000018","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="5.4470878" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)" x="47.185017" y="-17.470095"/>
                                <rect height="127.4308" id="rect5581-0-1" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.50000018","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="83.801353" transform="matrix(0.00728578,0.99997346,-0.99998093,0.00617565,0,0)" x="9.1144047" y="-153.71449"/>
                            </g>
                        </g>
                    </svg>)
                },
                {
                    id: "partnersLink",
                    text: "Partners",
                    hover: false,
                    selected: false,
                    svg: (<svg height="100px" id="SVGRoot" width="180px" version="1.1" viewBox="0 0 180 100">
                        <defs id="defs12079"/>
                        <g id="layer1">
                            <rect height="177.58902" id="rect5403-7-7-0" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.99999994","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="94.525803" rx="15" ry="15" transform="rotate(-90)" x="-97.122063" y="1.4395677"/>
                            <rect height="174.57335" id="rect5403-0-6-5-7" style={{"opacity":"1","fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="92.213234" rx="15" ry="15" transform="rotate(-90)" x="-95.814041" y="2.5670528"/>
                            <path id="path5480-17-4-6" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.99999994px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 31.093971,97.23157 c 0,0 -0.302024,2.078185 2.653103,2.122492 0,0 5.189431,0.07954 8.180393,0.02378 4.191559,-0.0782 3.869105,-2.044026 3.869105,-2.044026 z"/>
                            <path id="path5480-1-3-1-4" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.99999994px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 45.796572,97.333813 c 0,0 -0.302024,2.078186 2.653103,2.122492 0,0 5.189431,0.07954 8.180392,0.02378 4.19156,-0.0782 3.869106,-2.044027 3.869106,-2.044027 z"/>
                            <path id="path5480-0-2-7-6" style={{"fill":"#000000","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.99999994px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 31.722768,2.6662328 c 0,0 -0.302024,-2.07819377 2.653104,-2.12250027 0,0 5.189431,-0.0795373 8.180392,-0.0237775 4.191559,0.0781978 3.869105,2.04403457 3.869105,2.04403457 z"/>
                            <ellipse id="path5518-8-8-5-7-44" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.24999999","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-63.815899" cy="8.8277206" rx="1.1511985" ry="1.2451888" transform="rotate(-90)"/>
                            <rect height="126.78286" id="rect5581-0-3-6" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="83.723526" transform="rotate(-90)" x="-91.705734" y="26.475531"/>
                            <ellipse id="path5518-8-8-5-7-8-2" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.24999999","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-67.897217" cy="8.7943077" rx="1.1511985" ry="1.2451888" transform="rotate(-90)"/>
                            <ellipse id="path5518-8-8-5-7-4-2" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.24999999","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="-17.563686" cy="8.3151188" rx="2.4070513" ry="2.6035767" transform="rotate(-90)"/>
                            <rect height="2.7167757" id="rect5843-1" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="23.710764" rx="1.9999999" ry="2" transform="rotate(-90)" x="-60.758488" y="7.5761886"/>
                            <rect height="8.5984516" id="rect5845-9" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="32.520344" rx="3" ry="3" transform="rotate(-90)" x="-66.863091" y="161.1658"/>
                            <rect height="6.9277778" id="rect5845-5-6" style={{"opacity":"1","fill":"#3c393d","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.49999994","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="30.693882" rx="2.9999998" ry="3.0000002" transform="rotate(-90)" x="-66.041435" y="162.02122"/>
                            <path id="path5903-1" style={{"fill":"#f8951e","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.10000001","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 164.83257,19.984075 0.0169,-0.705287 c 0,0 -1.19662,0.533721 -1.44943,2.897395 0,2.401786 0.25281,3.583619 0.25281,3.583619 l -0.45505,0.03809 0.691,1.810873 0.58988,-1.810873 -0.45505,0.01909 c 0,0 -1.01123,-5.051384 0.80899,-5.83291 z"/>
                            <path id="path5905-4" style={{"fill":"#f8951e","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.10000001","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 166.30686,19.945939 v -0.686223 c 0,0 1.68538,-0.419355 1.75279,3.96487 0.0674,4.384216 0,4.269841 0,4.269841 l -0.35392,-1.505884 c 0,0 0.0843,-2.192117 -0.0505,-3.678929 -0.13484,-1.48683 -0.53933,-2.401786 -1.34831,-2.363667 z"/>
                            <path id="path5907-2" style={{"fill":"#f8951e","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.10000001","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 166.10841,80.925603 -2.70747,0.06363 V 71.28874 h 2.60737 v 0.624016 l -1.90332,0.0283 v 8.339022 l 1.99461,0.05668 z"/>
                            <rect height="0.6632753" id="rect5909-9" style={{"opacity":"1","fill":"#f8951e","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.10000001","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="6.2332082" transform="rotate(-90)" x="-79.253288" y="166.25613"/>
                            <rect height="0.6632753" id="rect5909-4-5" style={{"opacity":"1","fill":"#f8951e","fillOpacity":"1","stroke":"#f8951e","strokeWidth":"0.10000001","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="6.2332082" transform="rotate(-90)" x="-79.277054" y="168.02487"/>
                            <path id="path5439-9" style={{"fill":"#3c393d","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 151.41405,97.470257 16.48947,0.102193 c 0,0 11.25615,-1.616182 11.56883,-10.721877 0.31267,-9.105686 0.27636,-19.50645 0.27636,-19.50645 0,0 -1.78608,-1.121201 -2.22664,0.06288 -0.93801,-0.14454 -1.4528,6.187202 -2.18544,12.898673 -1.17481,8.244497 -6.14287,12.28121 -13.3297,13.367347 -4.53373,0.881726 -10.65601,1.237927 -10.65601,1.237927 0,0 -2.40817,-0.281788 -2.40817,1.30808 0,1.589885 2.4713,1.251215 2.4713,1.251215 z"/>
                            <path id="path5439-3-0" style={{"fill":"#3c393d","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 28.585952,97.53053 -16.48947,0.10221 c 0,0 -11.25615321,-1.616183 -11.56882692,-10.721878 -0.3126737,-9.105694 -0.27635947,-19.50645 -0.27635947,-19.50645 0,0 1.78607169,-1.121201 2.22663309,0.06288 0.938012,-0.14454 1.4528048,6.187194 2.1854377,12.898665 1.1748152,8.244505 6.1428736,12.28121 13.3297056,13.367355 4.533728,0.881726 10.656009,1.237928 10.656009,1.237928 0,0 2.408168,-0.281797 2.408168,1.308079 0,1.589885 -2.471297,1.251215 -2.471297,1.251215 z"/>
                            <path id="path5439-2-1" style={{"fill":"#3c393d","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="M 150.78013,2.363455 167.2696,2.2612537 c 0,0 11.25616,1.6161823 11.56883,10.7218763 0.31268,9.105688 0.27636,19.506444 0.27636,19.506444 0,0 -1.78607,1.1212 -2.22663,-0.06288 -0.93801,0.14454 -1.45281,-6.187194 -2.18544,-12.898665 -1.17482,-8.244499 -6.14287,-12.2812023 -13.32971,-13.3673476 -4.53372,-0.8817176 -10.656,-1.2379361 -10.656,-1.2379361 0,0 -2.40817,0.2817967 -2.40817,-1.3080712 0,-1.5898847 2.47129,-1.2512147 2.47129,-1.2512147 z"/>
                            <path id="path5439-7-2" style={{"fill":"#3c393d","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.49999997","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="M 28.65206,2.0151652 12.162591,1.9129639 c 0,0 -11.25615401,1.6161822 -11.56882771,10.7218771 -0.3126737,9.105687 -0.27635947,19.506443 -0.27635947,19.506443 0,0 1.78607168,1.121201 2.22663308,-0.06288 0.938012,0.14454 1.4528048,-6.187194 2.1854377,-12.898665 C 5.9042898,10.935245 10.872349,6.8985409 18.05918,5.8123955 22.592908,4.9306696 28.715189,4.5744678 28.715189,4.5744678 c 0,0 2.408168,0.2817967 2.408168,-1.3080796 0,-1.5898847 -2.471297,-1.2512147 -2.471297,-1.2512147 z"/>
                        </g>
                    </svg>)
                }
            ]

        };
        this.selectButton = this.selectButton.bind(this);
    }

    selectButton(button){
        let newState = Object.assign({}, this.state);
        let newBtns = newState.sideBarNavBtns.map(function(btn){
            return {
                id: btn.id,
                text: btn.text,
                hover: false,
                selected: false
            }
        });

        newBtns[button.index] = {id: button.id, text: button.text, hover: false, selected: true};
        this.setState(newBtns);
    }

    render(){
        return (
            <div>
                <SideBarNav buttons={this.state.sideBarNavBtns} textStyles={this.state.sideBarNavButtonTextStyles} update={this.selectButton}/>
                <ScrollContent>
                    <WhatIsUrKard/>
                    <SellingUrKard/>
                    <JoiningUrKard/>
                    <Partners/>
                </ScrollContent>
            </div>
        )
    }
}

export default Web;