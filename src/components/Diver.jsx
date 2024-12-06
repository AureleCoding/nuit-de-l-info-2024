import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';
import { lerp } from "three/src/math/MathUtils.js";

export default function Diver(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('./static/models/diver.glb');
    const { actions } = useAnimations(animations, group);
    const animation = 'Armature|mixamo.com|Layer0';

    useEffect(() => {
        const action = actions[animation];
        action?.reset().fadeIn(0.24).play();
        return () => action?.fadeOut(0.24);
    }, [actions, animation]);

    useEffect(() => {
        const handleScroll = () => {
            if (group.current) {
                group.current.position.y = lerp(group.current.position.y, -window.scrollY / 100, 0.1);
            }
        };

        const throttledHandleScroll = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', throttledHandleScroll);
        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <PerspectiveCamera makeDefault position={[-1, 2, 20]} fov={50} />
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Armature_73" rotation={[Math.PI / 2, 0, 0]} scale={0.262}>
                                <primitive object={nodes.GLTF_created_0_rootJoint} />
                                {Object.entries(nodes).map(([key, node]) => (
                                    node.geometry && node.material && (
                                        <skinnedMesh
                                            key={key}
                                            name={key}
                                            geometry={node.geometry}
                                            material={materials[node.material.name]}
                                            skeleton={node.skeleton}
                                        />
                                    )
                                ))}
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('./static/models/diver.glb');
