import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame, useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { SkeletonUtils } from 'three-stdlib'

const v = new THREE.Vector3(1, -1.45 + window.innerHeight / 7000, 0)
const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -0.4, 0))

export const Character = () => {
  const group = useRef()
  const { scene, materials, animations } = useGLTF('/models/character.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    function getMousePos(e) {
      return { x: e.clientX, y: e.clientY }
    }

    function moveJoint(mouse, joint, degreeLimit) {
      let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit)
      joint.rotation.y = THREE.MathUtils.degToRad(degrees.x)
      joint.rotation.x = THREE.MathUtils.degToRad(degrees.y)
    }

    animations[1].tracks.splice(12, 3)

    const handleMouseMove = (e) => {
      let mouseCoords = getMousePos(e)
      if (nodes.head) {
        moveJoint(mouseCoords, nodes.head, 30)
      }
    }

    actions.idle.play()

    document.addEventListener('mousemove', handleMouseMove, false)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove, false)
      actions.idle.stop()
    }
  }, [animations])

  useFrame(() => {
    group.current.position.lerp(v, 0.03)
    group.current.quaternion.slerp(q, 0.03)
  })

  return (
    <>
      <group ref={group} dispose={null} scale={[0.35, 0.35, 0.35]} rotation={[0, -2.4, 0]} position={[1, -5, 0]}>
        <group name='Armature' position={[-0.09, 1.2, 0.1]} rotation={[-0.09, 0.03, 0.02]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.neutral_bone} />
          <primitive object={nodes.neutral_bone_1} />
          <primitive object={nodes.neutral_bone_2} />
          <primitive object={nodes.neutral_bone_3} />
          <primitive object={nodes.neutral_bone_4} />
          <primitive object={nodes.neutral_bone_5} />
          <primitive object={nodes.neutral_bone_6} />
          <primitive object={nodes.neutral_bone_7} />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Body.geometry}
            material={nodes.Body.material}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Ear004.geometry}
            material={nodes.Ear004.material}
            skeleton={nodes.Ear004.skeleton}
          />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Hand004.geometry}
            material={nodes.Hand004.material}
            skeleton={nodes.Hand004.skeleton}
          />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Head.geometry}
            material={nodes.Head.material}
            skeleton={nodes.Head.skeleton}
          />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Horn001.geometry}
            material={nodes.Horn001.material}
            skeleton={nodes.Horn001.skeleton}
          />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Leg005.geometry}
            material={nodes.Leg005.material}
            skeleton={nodes.Leg005.skeleton}
          />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Nose.geometry}
            material={nodes.Nose.material}
            skeleton={nodes.Nose.skeleton}
          />
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={nodes.Ring005.geometry}
            material={materials.Material}
            skeleton={nodes.Ring005.skeleton}
          />
        </group>
      </group>
    </>
  )
}

function getMouseDegrees(x, y, degreeLimit) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage

  let w = { x: window.innerWidth, y: window.innerHeight }
  if (x <= w.x / 2) {
    xdiff = w.x / 2 - x
    xPercentage = (xdiff / (w.x / 2)) * 100
    dx = ((degreeLimit * xPercentage) / 100) * -1
  }

  if (x >= w.x / 2) {
    xdiff = x - w.x / 2
    xPercentage = (xdiff / (w.x / 2)) * 100
    dx = (degreeLimit * xPercentage) / 100
  }

  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y
    yPercentage = (ydiff / (w.y / 2)) * 100
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1
  }

  if (y >= w.y / 2) {
    ydiff = y - w.y / 2
    yPercentage = (ydiff / (w.y / 2)) * 100
    dy = (degreeLimit * yPercentage) / 100
  }

  return { x: dx, y: dy }
}
