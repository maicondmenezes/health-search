import React from 'react';

const FullLineButton = (props) => {
    return (
        <a href="#" className={props.type}
        onClick={props.action}>
            {props.title}
        </a>         
    );
};
export default FullLineButton;