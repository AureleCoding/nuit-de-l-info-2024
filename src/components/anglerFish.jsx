import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function AnglerFish(props) {
  const { nodes, materials } = useGLTF('src/assets/models/anglerfish.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.AnglerTeethAndLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.AnglerMat}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('src/assets/models/anglerfish.glb')
