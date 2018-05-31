import React, { Component} from "react";
import Peter from "../../assets/images/Peter.jpg";
import DownloadBrochureButton from "../Buttons/DownloadBrochureButton";
import axios from "axios";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            subject: "",
            comments: ""
        }
    }

    handleChange = (evt) => {
        let newState = {};
        newState[evt.target.name] = evt.target.value;
        this.setState(newState)
    };

    handleSubmit = (evt) => {
        evt.preventDefault();

        axios.post("/mail", this.state)
            .then( res => res)
            .then( message => {
                this.setState({submit: true});
            console.log(message)
            })

    };

    render(){
        const style = {
            wrapper: {
                height: window.innerHeight - 100,
            },
            container: {
                width: '90%',
                margin: '40px 5%',
                backgroundColor: "#3C393D",
                borderRadius: '15px',
            },
            flexBox: {
                display: 'flex',
                flexDirection: 'row'
            },
            formContainer: {
                flex: 1
            },
            cardContainer: {
                flex: 1
            },
            form: {
                display: 'flex',
                flexDirection: 'column'
            },
            email: {
                width: '90%',
                backgroundColor: 'transparent',
                border: '2px solid #5524A6',
                borderRadius: '5px',
                height: '30px',
                margin: '30px',
                color: '#FFF',
                fontSize: '18px',
                letterSpacing: 1.5
            },
            subject: {
                width: '90%',
                backgroundColor: 'transparent',
                border: '2px solid #5524A6',
                borderRadius: '5px',
                height: '30px',
                margin: '15px 30px',
                color: '#FFF',
                fontSize: '18px',
                letterSpacing: 1.5
            },
            comments: {
                width: '90%',
                backgroundColor: 'transparent',
                border: '2px solid #5524A6',
                borderRadius: '5px',
                height: '150px',
                margin: '15px 30px',
                color: '#FFF',
                fontSize: '18px',
                letterSpacing: 1.5
            },
            button: {
                background: 'transparent',
                color: '#F7951E',
                textAlign: 'center',
                padding: '10px',
                width: '20%',
                height: '50px',
                margin: '0px 30px 20px 30px',
                border: '2px solid #F7951E',
                borderRadius: '10px'
            }
        };

        if (this.state.submit){
            return (
                <div style={style.wrapper}>
                    <h1 style={{color: "#fff", textAlign: 'center', marginTop: '200px'}}>
                        Your message has been sent.
                    <br/> Thank You!
                </h1>
                </div>
            )
        }
        return (
            <div style={style.wrapper}>
                <div style={style.container}>
                    <p style={{
                        color: "#fff",
                        fontSize: '18px',
                        letterSpacing: 1.5,
                        textAlign: 'center'
                    }}>Please contact us by either filling out the form below or emailing peter@directimagecards.com</p>
                    <div style={style.flexBox}>
                        <div style={style.formContainer}>
                            <form style={style.form} action="mailto:peter@directimagecards.com">
                                <input style={style.email} placeholder="  YOUR EMAIL" name="email" onChange={this.handleChange}/>
                                <input style={style.subject} placeholder="  SUBJECT" name="subject" onChange={this.handleChange}/>
                                <textarea style={style.comments} placeholder=" YOUR MESSAGE" name="comments" onChange={this.handleChange}/>
                                <input style={style.button} type="submit" onClick={this.handleSubmit}/>
                            </form>
                        </div>
                        <div style={style.cardContainer}>
                            <img style={{width: '90%', margin: '5% 5% 10px 5%', height: '300px', borderRadius: '15px'}} src={Peter} alt="Peter Business Card"/>
                            <DownloadBrochureButton/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;