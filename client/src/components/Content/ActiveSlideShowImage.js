import React, { Component } from 'react';
//class name decides image to render with css

class ActiveSlideShowImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            class: '',
            opacity: 1.0
        };
        ActiveSlideShowImage.runAnimation = ActiveSlideShowImage.runAnimation.bind(this);
        this.decreaseOpacity = this.decreaseOpacity.bind(this);
    }


    componentWillMount(){
        //sets first class prop
        this.setState({
            class: this.props.class
        })
    }

    componentDidUpdate(){
        if (this.state.class === this.props.class) return false;
        //reset state
        this.setState({
            class: this.props.class,
            opacity: 1.0
        });
        return ActiveSlideShowImage.runAnimation(this.decreaseOpacity);
    }

    static runAnimation(next){
        next();
    }

    decreaseOpacity(){
        this.setState({
            opacity: this.state.opacity - .01
        });
    }

    render(){
        const style = {
            opacity: this.state.opacity
        };

        return <div style={style} className={this.state.class} />

    }
}

export default ActiveSlideShowImage;