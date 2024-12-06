import React, {useRef, useState, useEffect, useMemo, useCallback} from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
import {Float, OrbitControls, Stats} from '@react-three/drei';
import Diver from './Diver.jsx';
import Fish from './Fish.jsx';
import Jellyfish from './Jellyfish.jsx';
import AnglerFish from './AnglerFish.jsx';

const createColorInterpolator = () => {
    const lightBlue = new THREE.Color('lightblue');
    const darkBlue = new THREE.Color('darkblue');
    return (scrollY) => {
        const t = Math.min(scrollY / 1000, 1);
        return lightBlue.clone().lerp(darkBlue, t);
    };
};

const MovingEntity = React.memo(({Entity, scale, position, direction = 1}) => {
    const entityRef = useRef();

    useFrame(() => {
        if (entityRef.current) {
            entityRef.current.position.x = entityRef.current.position.x > 20 ? -20 : entityRef.current.position.x + 0.010 * direction;
        }
    });

    return (<Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[1, 2]}>
        <Entity ref={entityRef} scale={scale} position={position}/>
    </Float>);
});

const generateRandomPositions = (count, scaleRange, yOffset = 0) => Array.from({length: count}, () => ({
    position: [Math.random() * 40 - 20, Math.random() * 10 - 5 + yOffset, Math.random() * 10 - 5],
    scale: Math.random() * (scaleRange[1] - scaleRange[0]) + scaleRange[0],
}));

const FISH_POSITIONS = generateRandomPositions(4, [0.1, 0.1]);
const JELLYFISH_POSITIONS = generateRandomPositions(5, [0.5, 1], -20);
const ANGLER_POSITIONS = generateRandomPositions(2, [0.02, 0.04], -40);

function Experience() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const getAmbientLightColor = useMemo(() => createColorInterpolator(), []);

    const handleScroll = useCallback(() => {
        setScrollPosition(window.pageYOffset);
    }, []);

    useEffect(() => {
        const throttledScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener('scroll', throttledScroll, {passive: true});
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [handleScroll]);

    return (<Canvas camera={{position: [-1, 2, 20], fov: 50}} shadows>
        <ambientLight intensity={3} color={getAmbientLightColor(scrollPosition)}/>
        <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <Float speed={5} rotationIntensity={0} floatIntensity={1} floatingRange={[1, 2]}>
            <group position={[0, -5, 0]}>
                <Diver/>
            </group>
        </Float>
        {FISH_POSITIONS.map((fish, index) => (<MovingEntity
            key={`fish-${index}`}
            Entity={Fish}
            scale={fish.scale}
            position={fish.position}
        />))}
        {JELLYFISH_POSITIONS.map((jellyfish, index) => (<MovingEntity
            key={`jellyfish-${index}`}
            Entity={Jellyfish}
            scale={jellyfish.scale}
            position={jellyfish.position}
        />))}
        {ANGLER_POSITIONS.map((anglerFish, index) => (<MovingEntity
            key={`anglerFish-${index}`}
            Entity={AnglerFish}
            scale={anglerFish.scale}
            position={anglerFish.position}
            direction={-1}
        />))}
    </Canvas>);
}

export default Experience;
