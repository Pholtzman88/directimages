import React, { Component } from 'react';
import FAQModal from "../Content/FAQModal";
class FAQ extends Component {
    constructor(props){
        super(props);
        this.state = {
            qa: this.props.qa || [
                {
                    question: "Who is DirectImage Cards?",
                    answer: "DirectImage Cards was formed in 2012 with the idea to print souvenir cards to thermal image printers.  Thermal image printers are great machines. They can print cards in about 30 seconds but everything else around them is complicated.  There usually is a software program that is needed to upload the id template, a camera needed to capture the picture, and a website needed to upload everything.  We at DirectImage Cards thought that we could help by creating a mobile app that captured the pictures, captured the information and printed to the card in 30 seconds.  We launched our program and have executed Instant Issuance of Card programs in Toronto at the Roger Centre for a Blue Jay game, in Milwaukee for Harley Davidson’s 100th anniversary, at Toronto Comic Con to support the release of Captain America the Winter Soldier, at Woofstock where we took pictures of people and their pets, and several other venues in Canada and the United States supporting various trade shows and exhibits whereby people wanted to issue souvenir cards to the attendees. "
                },
                {
                    question: "How does the urKARD program work?",
                    answer: "Our urKARD app is on the App Store and Google Play Stores.  It is also housed on our secure server in Canada.  Customers send us ID templates and DirectImage Cards loads the templates on the urKARD app and customers download the app for free and fill in the information, take their picture, video perhaps fingerprint and print a card anywhere in the world.  The way we can print cards anywhere is that our urKARD app communicates with a MOS app installed on a computer has the printer driver on it and that our ID template tells it to print to the MOS app.  The MOS app is called Print Kard Client and it directs the thermal image printer to print the card.\n" +
                    "So urKARD is on a server?  \n" +
                    "Yes – our urKARD app is housed on our Canadian server which communicates with the App Store and the Google Play Store where customers can download it for free.  All data collected on urKARD is stored on our server as well.  Sensitive data such as videos can only be accessed by specific numbers and are only accessed at the customer request or in an emergency police situation.  We will not sell your data and only use it to print your card and house your videos for a year after which the data is deleted.  "
                },
                {
                    question: "When did you launch urKARD?",
                    answer: "urKARD was launched in 2012, but it was a mobile app that was privately used and not on the App Store or Google Play Stores.  We launched the current version of urKARD on the App Store and Google Play Stores in the fall of 2017.  "
                },
                {
                    question: "How do I get urKARD for my company?",
                    answer: "Contact peter@directimagecards.com for information on getting urKARD on your website and selling it to your customers."
                },
                {
                    question: "I have an idea for a card that I want to put on urKARD? Who should I talk to?",
                    answer: "Contact peter@directimagecards.com for information on getting on our roller bar and selling cards in your place of business.  We can make it happen."
                }
            ]
        }
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                {this.state.qa.map( qa => <FAQModal question={qa.question} answer={qa.answer}/>)}
            </div>
        );
    }
}

export default FAQ;