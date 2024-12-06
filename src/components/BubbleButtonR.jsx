import React, {useEffect} from "react";
import {useRef} from "react";

import "../styles/components/bubbleButtonR.scss";

function BubbleImageR({path, id}) {
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

    return (<div className={"BubbleButtonR  boxRight"} ref={imageRef} id={id}>
        <img className="imageAnim" src={path} alt="Image"/>
    </div>);
}

export default BubbleImageR;