import React, { Component } from "react";

class DownloadAppButtons extends Component{
    render(){
        const style = {
            iosLink: {
                width: "215px",
                height: "65px",
                float: "left"
            },
            androidLink: {
                width: "215px",
                height: "65px",
                float: "right"
            }
        };
        return (
                <div className="googlePlayImg">
                    <a href="https://play.google.com/store/search?q=urkard&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <div style={style.androidLink}/>
                    </a>
                    <a href="https://itunes.apple.com/us/app/urkard/id970590094?mt=8">
                        <div style={style.iosLink} />
                    </a>
                </div>
        );
    }
}

export default DownloadAppButtons;