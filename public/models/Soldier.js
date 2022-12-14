/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/soldier.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.vanguard_Mesh.geometry}
          material={materials.VanguardBodyMat}
          skeleton={nodes.vanguard_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vanguard_visor.geometry}
          material={materials.Vanguard_VisorMat}
          skeleton={nodes.vanguard_visor.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/soldier.glb')
