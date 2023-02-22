import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById('app'));
export const OptionModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel='Selected Option'
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </ReactModal>
);