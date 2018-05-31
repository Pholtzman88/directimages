import React, { Component } from 'react';
import InactiveSlideShowImage from '../Content/InactiveSlideShowImage';
import ActiveSlideShowImage from '../Content/ActiveSlideShowImage';

class SlideShow extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgLinks: [],
            frameCounter: 0,
            currentImageIndex: 0,
            nextImageIndex: 1
        };

        this.tick = this.tick.bind(this);
        this.updateFrameCounter = this.updateFrameCounter.bind(this);
        this.progressNextImage = this.progressNextImage.bind(this);
        this.progressCurrentImage = this.progressCurrentImage.bind(this);
        this.progressImages = this.progressImages.bind(this);
    }

    componentWillMount(){
        this.setState({
            imgLinks: this.props.imgLinks
        })
    }

    componentDidMount(){
        this.tick()
    }

    tick(){
        this.updateFrameCounter();
        this.progressImages();
        window.requestAnimationFrame(this.tick)
    }

    updateFrameCounter(){
        this.setState({
            frameCounter: this.state.frameCounter + 1
        });
    }

    progressImages(){
        if ( this.state.frameCounter < 200) return false;
        this.progressCurrentImage(this.state.currentImageIndex);
        this.progressNextImage(this.state.nextImageIndex);
    }

    progressCurrentImage(index){
        const update = this.state.frameCounter % 300 === 0;
        const max = this.state.imgLinks.length - 1;
        const progress = index < max;

        if (update){
            if (progress){
                return this.setState({
                    currentImageIndex: this.state.currentImageIndex + 1
                })
            }
            else {
                return this.setState({
                    currentImageIndex: 0
                })
            }
        }
    }

    progressNextImage(index){
        const update = this.state.frameCounter % 300 === 0;
        const max = this.state.imgLinks.length - 1;
        const progress = index < max;

        if (update){
            if (progress){
                return this.setState({
                    nextImageIndex: this.state.nextImageIndex + 1
                })
            }
            else {
                return this.setState({
                    nextImageIndex: 0
                })
            }
        }
    }



    render(){
        const currentIndex = this.state.currentImageIndex;
        const nextIndex = this.state.nextImageIndex;
        const activeImg = this.state.imgLinks[currentIndex];
        const inactiveImg = this.state.imgLinks[nextIndex];
        return (
                <div className="slideShowContainer">
                    <div className="activeImgContainer">
                        <ActiveSlideShowImage class={activeImg.class}/>
                    </div>
                    <div className="inactiveImgContainer">
                        <InactiveSlideShowImage class={inactiveImg.class} />
                    </div>
                </div>
        )
    }
}

export default SlideShow;