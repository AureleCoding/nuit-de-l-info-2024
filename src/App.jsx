import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Suspense} from "react";
import Home from "./pages/Home.jsx";
import Credits from "./pages/Credits.jsx";
import Layout from "./components/Layout.jsx";
import {Canvas} from "@react-three/fiber";
import {Box, Scroll, ScrollControls} from "@react-three/drei";
import Capchat from "./pages/Capchat.jsx";

function App() {
    return (<>
        <Suspense fallback={<div>Loading...</div>}>
            <Player url="./static/music/underwater.mp3" url2={"./static/assets/music/egg1.mp3"}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Capchat/>}/>
                        <Route path="credits" element={<Credits/>}/>
                        <Route path={"home"} element={<Home/>}/>
                        {/*<Route path="*" element={<NoPage/>}/>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    </>)
}

export default App

import React, {useState, useEffect} from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        audio.loop = true;
        audio.play();
    }, []);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(true));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(true));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({url, url2}) => {
    const [playing, toggle] = useAudio(url);
    const [playing2, toggle2] = useAudio(url2);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (playing) {
            setCount(count + 1);
        }
        if (count > 10 && playing) {
            toggle();
            toggle2();
        }
        console.log(count);
    }, [playing]);

    return (<div>
        <button className={"mute"} onClick={toggle}>{playing ? "🔈" : "🔇"}</button>
    </div>);
};