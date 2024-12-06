import React, {useRef, useEffect, useState} from "react";
import "../styles/components/capchat.scss";
import {Canvas, useFrame} from "@react-three/fiber";
import {Float} from "@react-three/drei";
import Fish from "../components/Fish.jsx";
import {Link} from "react-router-dom";

const RandomMovingFish = ({scale, onClick}) => {
    const fishRef = useRef();
    const [position, setPosition] = useState([Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10]);
    const [direction, setDirection] = useState([(Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1]);
    const [visible, setVisible] = useState(true);

    const resetFish = () => {
        setPosition([Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10]);
        setDirection([(Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1]);
        setVisible(true);
    };

    useFrame(() => {
        if (!visible) return;

        fishRef.current.rotation.y += 0.1;

        setPosition((prev) => {
            const [x, y, z] = prev;
            const [dx, dy, dz] = direction;

            const newPosition = [x + dx, y + dy, z + dz];

            const boundedPosition = newPosition.map((coord, idx) => {
                if (coord > 10 || coord < -10) {
                    setDirection((prevDirection) => {
                        const newDirection = [...prevDirection];
                        newDirection[idx] *= -1;
                        return newDirection;
                    });
                }
                return Math.max(Math.min(coord, 10), -10);
            });

            return boundedPosition;
        });
    });

    const handleClick = () => {
        setVisible(false);
        onClick();
        setTimeout(resetFish, 1000);
    };

    return visible ? (
        <Float speed={1} rotationIntensity={1} floatIntensity={1}>
            <Fish
                ref={fishRef}
                position={position}
                scale={scale}
                onClick={handleClick}
            />
        </Float>
    ) : null;
};

const Capchat = () => {
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(20);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [tries, setTries] = useState(0);

    const NUM_FISH = 10;

    const handleFishClick = () => {
        setScore((prev) => prev + 1);
    };

    useEffect(() => {
        if (gameStarted) {
            const timer = setInterval(() => {
                setTime((prev) => {
                    if (prev <= 0) {
                        clearInterval(timer);
                        setGameOver(true);
                        setGameStarted(false);
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [gameStarted]);

    const startGame = () => {
        setScore(0);
        setTime(20);
        setGameStarted(true);
        setGameOver(false);
        setTries((prev) => prev + 1);
    };

    return (
        <div className="container-capchat">
            {!gameStarted && !gameOver ? (
                <button style={{width: "200px"}} onClick={startGame}>Etes vous un robot ?</button>
            ) : gameOver && score < 20 ? (
                <TrashTalk trashNum={tries} onRetry={startGame}/>
            ) : gameOver || score >= 20 || tries >= 3 ? (
                <VerificationPage/>
            ) : (
                <div className={"content-captcha"}>
                    <h2>Attrapez {20} poissons en 20 secondes !</h2>
                    <div className="score">Score: {score}</div>
                    <div className="timer">Time: {time}s</div>
                    <div className="tries">Tries: {tries}</div>
                    <Canvas camera={{position: [-1, 2, 20], fov: 50}} shadows>
                        <ambientLight intensity={3}/>
                        <pointLight position={[10, 10, 10]}/>

                        {[...Array(NUM_FISH)].map((_, index) => (
                            <RandomMovingFish
                                key={index}
                                scale={0.5}
                                onClick={handleFishClick}
                            />
                        ))}
                    </Canvas>
                </div>
            )}
        </div>
    );
}

export default Capchat;

const TrashTalk = ({onRetry, trashNum}) => {
    const trash = [
        "Veuillez essayer de nouveau",
        "Hum pas ouf encore mais on y croit",
        "Bon la ça crains #cringe",
        "Bon t'es tellment nul que tu n'es pas un robot",
    ];

    return (
        <div className="trash-talk">
            <h1>Perdu</h1>
            <p>{trash[trashNum % trash.length]}</p>
            <button onClick={onRetry}>Retry</button>
        </div>
    );
};

const VerificationPage = () => {
    return (
        <div className="verification-page">
            <h1>Vous n'êtes pas un robot</h1>
            <p>Félicitations ! Vous pouvez maintenant accéder au site.</p>
            <Link to={"home"}>Retour à l'accueil</Link>
        </div>
    );
};