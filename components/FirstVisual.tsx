import { useFrame } from '@react-three/fiber'
import { NextPage } from 'next'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

interface Props {
  position: [number, number, number]
  map: string
  args: [number, number, number]
  speed: number
}

const Sphere: NextPage<Props> = (props) => {
  const group = useRef({} as THREE.Mesh)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  useEffect(() => {
    const loader = new TextureLoader()
    setTexture(loader.load(props.map))
  }, [])
  useFrame(() => {
    group.current.rotation.y += props.speed
  })

  return (
    <mesh ref={group} position={props.position}>
      <sphereGeometry args={props.args} />
      <meshLambertMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  )
}

const Sun: NextPage<Props> = (props) => {
  const group = useRef({} as THREE.Mesh)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  useEffect(() => {
    const loader = new TextureLoader()
    setTexture(loader.load(props.map))
  }, [])
  useFrame(() => {
    group.current.rotation.y += props.speed
  })

  return (
    <mesh ref={group} position={props.position}>
      <sphereGeometry args={props.args} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  )
}

const FirstVisual: NextPage = () => {
  return (
    <>
      <Sun
        map={'2k_sun.jpeg'}
        position={[0, 0, -1]}
        args={[1, 20, 20]}
        speed={0.001}
      />
      <Sphere
        map={'2k_earth_daymap.jpeg'}
        position={[5, -1.5, 1]}
        args={[1, 20, 20]}
        speed={0.08}
      />
      <Sphere
        map={'2k_mars.jpeg'}
        position={[2, 1.5, -2]}
        args={[0.5, 20, 20]}
        speed={-0.01}
      />
      <Sphere
        map={'2k_uranus.jpeg'}
        position={[-6, 3, -5]}
        args={[2, 20, 20]}
        speed={-0.007}
      />
      <Sphere
        map={'2k_mercury.jpeg'}
        position={[-4.3, -1, 2]}
        args={[1, 20, 20]}
        speed={0.01}
      />
      <Sphere
        map={'2k_saturn.jpeg'}
        position={[-1.6, -2.5, -3]}
        args={[1, 20, 20]}
        speed={0.002}
      />
      <Sphere
        map={'2k_jupiter.jpeg'}
        position={[-2, 2, -9]}
        args={[1, 20, 20]}
        speed={0.004}
      />
      <Sphere
        map={'2k_venus_surface.jpeg'}
        position={[2.5, -3, 5]}
        args={[0.5, 20, 20]}
        speed={-0.009}
      />
      <Sphere
        map={'2k_neptune.jpeg'}
        position={[5.5, 3, 5]}
        args={[2, 20, 20]}
        speed={-0.009}
      />
    </>
  )
}

export default FirstVisual
