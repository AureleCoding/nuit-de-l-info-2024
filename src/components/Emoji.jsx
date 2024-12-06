import React from 'react';
import "../styles/components/Emoji.scss"

function Emoji({image}) {
    return (
        <div>
            <button>{image}</button>
        </div>
    );
}

export default Emoji;