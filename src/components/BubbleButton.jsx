import React, {useEffect} from "react";
import {useRef} from "react";

import "../styles/components/bubbleButton.scss";

function BubbleImage({path, id}) {
    const imageRef = useRef(null);

    document.addEventListener("scroll", () => {
        if (imageRef.current) {
            const boxes = document.querySelectorAll('.box');
            const triggerBottom = window.innerHeight / 5 * 4;
            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < triggerBottom) {
                   box.classList.add('visibleLeft');

                } else {
                    box.classList.remove('visibleLeft');
                }
            });

        }

    });

    return (<div className={"BubbleButton  box"} ref={imageRef} id={id}>
        <img className="imageAnim" src={path} alt="Image"/>
    </div>);
}

export default BubbleImage;