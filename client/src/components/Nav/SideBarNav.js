import React, { Component } from "react";

import SideBarNavButton from "../Buttons/SideBarNavButton";

import "../../assets/stylesheets/SideBarNav.css";

class SideBarNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            navBtns: [],
            textStyles: {}
        };
    }

    componentWillMount(){
        this.setState({
            navBtns: this.props.buttons || [],
            textStyles: this.props.textStyles || {}
        });
    }

    componentDidUpdate(){
        if (this.state.navBtns !== this.props.buttons)
        return this.setState({
            navBtns: this.props.buttons,
            textStyles: this.props.textStyles
        });

    }

    render(){
        const textStyle = this.state.textStyles;
        const navButtons = this.state.navBtns.map((button, i) => {
            return(
                    <SideBarNavButton
                        key={button.id}
                        id={button.id}
                        text={button.text}
                        textStyle={textStyle[button.id]}
                        index={i}
                        hover={button.hover}
                        selected={button.selected}
                        update={this.props.update}
                        svg={button.svg}
                    />
            );
        });

        return (

            <div className="container">
                {navButtons}
            </div>
        )
    }
}

export default SideBarNav;