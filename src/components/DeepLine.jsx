import React, {useState, useEffect, useRef} from "react";
import "../styles/components/deepLine.scss";

const OceanDepth = () => {
    const [depth, setDepth] = useState(50);
    const [maxScrollHeight, setMaxScrollHeight] = useState(20);
    const containerRef = useRef(null);
    const depthRef = useRef(null);

    useEffect(() => {
        const calculateMaxScroll = () => {
            const body = document.body;
            const html = document.documentElement;
            const documentHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            const windowHeight = window.innerHeight;
            setMaxScrollHeight(documentHeight - windowHeight);
        };

        const handleScroll = () => {
            if (!containerRef.current || !depthRef.current) return;

            const scrollPercentage = (window.scrollY / maxScrollHeight) * 100;

            const calculatedDepth = 50 + (scrollPercentage * 4.5);

            const finalDepth = Math.min(calculatedDepth, 500);
            setDepth(finalDepth);

            const containerHeight = containerRef.current.clientHeight;
            const cursorHeight = depthRef.current.clientHeight;
            let newPosition = (scrollPercentage / 110) * (containerHeight - cursorHeight * 2) + 20;

            depthRef.current.style.transform = `translateY(${newPosition}px)`;
        };

        calculateMaxScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", calculateMaxScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", calculateMaxScroll);
        };
    }, [maxScrollHeight]);

    return (
        <div className="container" ref={containerRef}>
            <div className="line">
                <div className="depth-cursor" ref={depthRef}>
                    <div className="depth-text">
                        {Math.round(depth)} m
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OceanDepth;