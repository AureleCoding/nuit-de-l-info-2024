import React from 'react';
import '../styles/Sommaire.scss'

function Button2({text}) {
    return (
        <div>
            <div className={"button2"}>
                <button>{text}</button>
            </div>
        </div>
    );
}

export default Button2;