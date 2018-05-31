import React, { Component } from "react";

import "../../assets/stylesheets/Carousel.css";

class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            x: 0
        }
    }
    handleLeftNav = event => {
        event.preventDefault();
        const { carouselViewport } = this.refs;
        carouselViewport.scrollLeft -= (window.innerWidth - 50);
    };

    handleRightNav = event => {
        event.preventDefault();
        const { carouselViewport } = this.refs;
        carouselViewport.scrollLeft += (window.innerWidth - 50);
    };

    render(){
        const style = {
            cover: {
                width: '100%',
                height: '100px',
                backgroundColor: '#3C393D',
                position: 'relative',
                bottom: '17px'
            }
        };
        return (
            <div >
                <div className='carousel-container'>
                    <button onClick={this.handleLeftNav} className='carousel-nav carousel-left-nav'>
                        <h1>&#60;</h1>
                    </button>
                    <div className="carousel-viewport" ref="carouselViewport">
                        {this.props.children}
                    </div>
                    <button onClick={this.handleRightNav} className='carousel-nav carousel-right-nav'>
                        <h1>&#62;</h1>
                    </button>
                </div>
                <div style={style.cover} />
            </div>

        )
    }
}

export default Carousel;