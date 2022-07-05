/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bu3312ationnn.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.68, 3.63, 0.4]} rotation={[-0.03, 0.01, 0]}>
        <group position={[0, -1.19, 0]} rotation={[0, Math.PI / 9, 0]}>
          <mesh geometry={nodes.Circle002.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Circle003.geometry} material={materials.cord} />
          <mesh geometry={nodes.paper001.geometry} material={materials.paper} />
          <mesh geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} />
        </group>
      </group>
      <group position={[-0.45, 3.63, -0.41]} rotation={[0.03, 0, 0.01]}>
        <group position={[0.01, -1.8, -0.01]} rotation={[0.01, -0.34, 0]}>
          <mesh geometry={nodes.Circle.geometry} material={materials.Metal} />
          <mesh geometry={nodes.paper.geometry} material={materials.paper} />
          <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} />
        </group>
        <mesh geometry={nodes.Circle001.geometry} material={materials.cord} position={[0.01, -1.8, -0.01]} rotation={[0.01, -0.17, 0]} />
      </group>
      <group position={[0.17, 3.63, 0.15]} rotation={[-0.01, 0, 0]}>
        <group position={[0, -1.5, -0.01]} rotation={[0.01, -0.34, 0]} scale={0.6}>
          <mesh geometry={nodes.Circle004.geometry} material={materials.Metal} />
          <mesh geometry={nodes.paper002.geometry} material={materials.paper} />
          <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} />
        </group>
        <mesh geometry={nodes.Circle005.geometry} material={materials.cord} position={[0, -1.5, -0.01]} rotation={[0.01, 0.01, 0]} />
      </group>
      <group position={[-0.51, 0.41, -0.1]} rotation={[0, 0.66, 0]}>
        <group position={[0, 0, 0.1]}>
          <mesh geometry={nodes.Mesh_6.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Mesh_7.geometry} material={materials.fabricseam} />
        </group>
        <group position={[0, 0.22, 0.05]}>
          <mesh geometry={nodes.Cube002_1.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Cube002_2.geometry} material={materials.fabricseam} />
          <mesh geometry={nodes.Cube009.geometry} material={materials.logo} />
        </group>
        <mesh geometry={nodes.Cube002.geometry} material={materials.Metal} position={[0, 0, 0.1]} />
        <mesh geometry={nodes.Cube003.geometry} material={materials.Metal} position={[0, 0, 0.1]} />
        <mesh geometry={nodes.Cube005.geometry} material={materials.blk} position={[0, 0, 0.1]} />
        <mesh geometry={nodes.Cube011.geometry} material={materials.Metal} position={[0, 0, 0.1]} />
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials.floor} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.wall} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.wall} />
      <mesh geometry={nodes.Mesh_1.geometry} material={materials.molding} />
      <mesh geometry={nodes.Mesh_2.geometry} material={materials.wall} />
      <mesh geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} position={[0.08, 0, -0.44]} />
      <mesh geometry={nodes.Circle007.geometry} material={materials.Metal} position={[0.08, 0, -0.44]} />
      <mesh geometry={nodes.Circle008.geometry} material={materials.wall} position={[0.14, 0.45, -0.49]} />
      <mesh geometry={nodes.Circle009.geometry} material={materials.ruh} />
      <mesh geometry={nodes.Circle010.geometry} material={materials.Metal} position={[0.17, 2.13, 0.15]} />
      <mesh geometry={nodes.Circle011.geometry} material={materials.Metal} position={[-0.45, 1.83, -0.41]} />
      <mesh geometry={nodes.Circle012.geometry} material={materials.Metal} position={[-0.68, 2.44, 0.4]} />
    </group>
  )
}

useGLTF.preload('/bu3312ationnn.glb')
