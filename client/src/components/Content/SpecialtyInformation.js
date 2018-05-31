import React, { Component } from "react";

class SpecialtyInformation extends Component{
    render(){

        const style = {
            list: {
                marginLeft: "75px",
                listStyleType: "disc"
            }
        };

        return (
            <div className="specialtyInfo">
                <h1>Specializing in:</h1>
                <ul style={style.list}>
                    <li>
                        <h3>Custom Card Production</h3>
                    </li>
                    <li>
                        <h3>Event Marketing</h3>
                    </li>
                    <li>
                        <h3>Web Service Bureau</h3>
                    </li>
                    <li>
                        <h3>Mobile Custom Card Applications</h3>
                    </li>
                    <li>
                        <h3>Fingerprint</h3>
                    </li>
                    <li>
                        <h3>QR Code</h3>
                    </li>
                    <li>
                        <h3>Driver's License Scanning</h3>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SpecialtyInformation;