import React, { Component } from 'react';
import './Modal.css';

let dialogStyle = {

    width: '700px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#4CAF50', opacity: '0.96',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',

};

let buttonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
};

class Modal extends Component {
    render() {

        let modal = (
            <div style={dialogStyle}>
                <div> {this.props.children} </div>
                <button style={buttonStyle} onClick={this.props.onClose}>Close</button>
            </div>
        );
        if (!this.props.isOpen) {
            modal = null;
        }
        return (
            <div>
                {modal}
            </div>
        );
    }
}

export default Modal; 