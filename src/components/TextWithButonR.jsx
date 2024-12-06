import React, {useEffect} from "react";
import {useRef} from "react";

import "../styles/components/TextWithButtonR.scss";

function TextWithButtonR({path, text}) {
    const imageRef = useRef(null);

    document.addEventListener("scroll", () => {
        if (imageRef.current) {
            const boxes = document.querySelectorAll('.boxRight');
            const triggerBottom = window.innerHeight / 5 * 4;
            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < triggerBottom) {
                    box.classList.add('visibleRight');

                } else {
                    box.classList.remove('visibleRight');
                }
            });

        }

    });

    return (
        <div className={"TextWithButtonR  boxRightR"} ref={imageRef}>
        <p>
            {text}
        </p>
    </div>);
}

export default TextWithButtonR;
