import React, { Component } from "react";

import Modal from "react-responsive-modal";
import "../../assets/stylesheets/MusicCard.css";

class MusicCardModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            content: this.props.content || false,
            class: this.props.class || ""
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
                <button className={this.state.class + " btn"} onClick={this.onOpenModal}>{this.state.question}</button>
                <Modal open={open} onClose={this.onCloseModal} little>
                    {this.props.content}
                </Modal>
            </div>
        );
    }
}

export default MusicCardModal;