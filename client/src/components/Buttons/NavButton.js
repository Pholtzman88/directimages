import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import "../../assets/stylesheets/NavBar.css";

class NavButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            path: "",
            text: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        return this.setState({
            path: this.props.path,
            text: this.props.text
        })
    }

    handleClick(){
        window.scrollTo(0,0)
    }


    render(){

        return (
                <NavLink data-id={this.props.id.replace("btn-", "")} to={this.state.path} >
                    <button className="linkBtn" id={this.props.id} onClick={this.handleClick}>
                        <h2 className="linkTitle">
                            {this.state.text}
                        </h2>
                    </button>
                </NavLink>

        )
    }
}

export default NavButton;