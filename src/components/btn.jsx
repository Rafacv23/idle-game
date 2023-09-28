import React from 'react';
import "../styles/btns.css"

const Btn = (props) => {
    return (
        <button key={props.key} onClick={props.onClick} className={props.className}>
            {props.text} {props.number}
        </button>
    );
}

export default Btn;
