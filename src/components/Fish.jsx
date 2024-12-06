import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Fish = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./static/models/fish.glb')
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0, -0.946]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line01_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[0, 0, 0]}
            rotation={[-1.593, -0.003, 0.768]}
            scale={0.032}
          />
        </group>
      </group>
    </group>
  )
})

Fish.displayName = 'Fish'
useGLTF.preload('./static/models/fish.glb')

export default Fish