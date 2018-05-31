import React, { Component } from "react";
import DownloadAppButtons from "../Buttons/DownloadAppButtons";

class DownloadApp extends Component{
    render(){
        const style = {
            container: {
                textAlign: "center"
            },
            buttonsContainer: {
                marginLeft: "calc(50% - 225px)",
                marginTop: "20px"
            }
        };
        return (
            <div style={style.container}>

                <h1>Need a Custom card created for you?</h1>

                <h2 style={{color: "black", fontSize: "24px", fontWeight: "bold"}}>
                    Download Our App! It's as easy as 1-2-3!
                </h2>

                <div style={style.buttonsContainer}>

                    <DownloadAppButtons/>

                </div>
            </div>

        )
    }
}

export default DownloadApp;