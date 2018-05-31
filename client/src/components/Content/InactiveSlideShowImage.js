import React, { Component } from 'react';
//class name decides image to render with css

class InactiveSlideShowImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            class: ''
        };
    }

    componentWillMount(){
        this.setState({
            class: this.props.class
        })
    }

    componentDidUpdate(){
        if (this.state.class === this.props.class) return false;
        this.setState({
            class: this.props.class
        })
    }

    render(){

        return <div  className={this.state.class} />

    }
}

export default InactiveSlideShowImage;