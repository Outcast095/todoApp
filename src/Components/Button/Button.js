import React from 'react';

function Button(props) {

    return (
        <button
            onClick={props.handler}
        >
            {props.buttonName}
        </button>
    );
}

export default Button;