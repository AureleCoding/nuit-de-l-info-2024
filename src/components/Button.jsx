import React from 'react';
import '../styles/Sommaire.scss'

function Button({text}) {
    return (
        <div className={"button"}>
            <button>{text}</button>
        </div>
    );
}


export default Button;