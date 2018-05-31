import React, { Component } from "react";

class ServicesContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: this.props.view || 'no view provided',
            height: window.innerHeight,
            width: window.innerWidth,
            x: 0
        }
    }

    onScrollRight = () => {
        const newX = this.state.x + window.innerWidth;
        window.scrollLeft(newX);
        this.setState({
            x: newX
        })
    };

    onScrollLeft = () => {
        const newX = this.state.x - window.innerWidth;
        window.scrollTo(newX, 0);
        this.setState({
            x: newX
        })
    };

    render(){

        const style = {
            viewContainer: {
                width: window.innerWidth,
                height: window.innerHeight - 100,
                overflow: 'auto',
                display: 'flex'
            },
            arrowLeftContainer: {
                width: '200px',
                height: '100%',
                position: 'absolute',
                border: '5px solid white',
            },
            arrowRightContainer: {
                width: '200px',
                height: '100%',
                border: '5px solid white',
                position: 'absolute',
                left: window.innerWidth - 200
            },
            container: {
                width: window.innerWidth * this.props.children.length,
                height: this.state.height,
                backgroundColor: "white",
                display: "flex"
            }
        };

        return (
            <div style={style.viewContainer}>

                <div onClick={this.onScrollLeft} style={style.arrowLeftContainer}>
                    left
                </div>

                <div style={style.container}>
                    {this.props.children}
                </div>

                <div onClick={this.onScrollRight} style={style.arrowRightContainer}>
                    right
                </div>

            </div>
        )
    }
}

export default ServicesContent;