import React from 'react';

const Title = (props) => {
    return (
        <h2 className={props.className}>
            {props.text}
        </h2>
    );
}

export default Title;
