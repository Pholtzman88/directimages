import React, { Component} from "react";
import FlippableContent from "../Content/FlippableContent";
import front from "../../assets/images/musicFront.jpg";
import back from "../../assets/images/musicBack.jpg";
import MusicCardModal from "../Content/MusicCardModal";
import VideoPlayer from "../VideoPlayers/VideoPlayer";
import video from "../../assets/videos/harley.mp4";
import image from "../../assets/images/bandWebsite.jpg";
import background from "../../assets/images/musicPageBackground.png";
import FAQButton from "../Buttons/FAQButton";

class Music extends Component{
    render(){
        return (
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
                <h1 style={{textAlign: 'center', color: "#F7951E", fontSize: '48px'}}>Music Kard</h1>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{flex: 2, margin: '60px 10px'}}>
                        <FlippableContent
                            front={(
                                <div>
                                    <img style={{
                                        width: '100%',
                                        height: '340px',
                                        borderRadius: '20px'
                                    }} src={front} alt="music card front"/>
                                    <MusicCardModal class="video" content={(
                                        <VideoPlayer src={video} autoplay={true}/>
                                    )}/>
                                    <MusicCardModal class="website" content={(
                                        <img width={"800px"} src={image} alt=""/>
                                    )}/>
                                </div>
                            )}
                            back={(
                                <div>
                                    <img style={{
                                        width: '100%',
                                        height: '340px',
                                        borderRadius: '20px'
                                    }} src={back} alt="music card back"/>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{flex: 2}}>
                        <h1 style={{color: '#7D8F9D', margin: '60px 20px 0px 20px'}}>
                            <u>How It Works</u>
                        </h1>
                        <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px'}}>
                            Distribute  YOUR

                            Music
                            Videos
                            Photos
                            Web Links

                            via a custom
                            Keepsake  Card
                        </h1>
                        <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px'}}>
                            Your fan orders a card from either your store or web site.
                            We create the card and ship to the fan.
                        </h1>
                        <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px'}}>
                            No pre purchase
                            You pay the agreed upon price when you Sell
                        </h1>
                    </div>
                </div>
                <FAQButton link={'/MusicFAQ'} styling={{
                    width: '300px',
                    height: '300px',
                    float: 'right',
                    marginRight: '50px'
                }}/>
                <h1 style={{color: '#7D8F9D', margin: '15px'}}>
                    <u>Need a Website?</u>
                </h1>
                <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px', lineHeight: 1.5}}>
                    Let us host your Music, Videos, Photos and Podcasts via a custom Web Page.
                    Provide us with your graphics and music. For as low as a $200 set up fee

                    and commitment to sales of 5 cards per month, we create your custom web site with the ability to sell your music cards.

                    Hosting is provided by our server at agreed upon cost.
                </h1>
            </div>
        )
    }
}

export default Music;