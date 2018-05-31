import React, { Component} from "react";
import NavButton from "../Buttons/NavButton";

import "../../assets/stylesheets/NavBar.css";


class NavBar extends Component{

    render(){
        const style = {
            buffer: {
                height: "100px",
                width: "100%"
            }
        };

        return (
            <div>
                <div className="navBar">
                    <div style={style.flexBox}>
                        < div className={'logo'} />

                    </div>
                    <div className="navBtn-container">
                        <NavButton id='btn-1' path='/' text='Home' />
                        <NavButton id='btn-2' path='Web' text='About'  />
                        <NavButton id='btn-3' path='Services' text='Services' />
                        <NavButton id='btn-4' path='Music' text='Music' />
                        <NavButton id='btn-5' path='Contact' text='Contact'  />
                    </div>
                </div>
                <div style = {style.buffer}/>
            </div>

        );
    }
}

export default NavBar;