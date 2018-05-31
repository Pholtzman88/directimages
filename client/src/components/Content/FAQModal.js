import React, { Component } from "react";

import Modal from "react-responsive-modal";
import "../../assets/stylesheets/FAQ.css";

class FAQModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            question: this.props.question || false,
            answer: this.props.answer || false,
            content: this.props.content || false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;

        return (
            <div>
                <button className='faqButton' onClick={this.onOpenModal}>{this.state.question}</button>
                <Modal open={open} onClose={this.onCloseModal} little>
                    <h2 className='modalQuestion'>{this.state.question}</h2>
                    <p className='modalAnswer'>{this.state.answer}</p>
                </Modal>
            </div>
        );
    }
}

export default FAQModal;