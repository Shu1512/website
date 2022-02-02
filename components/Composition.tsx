import { ScrollControls, Scroll } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import FirstVisual from '@/components/FirstVisual'
import Light from '@/components/Light'

const MouseMoveCamera: React.VFC = () => {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x / 2, mouse.y / 2, camera.position.z),
      0.1
    )
  )
}

const Composition: React.VFC = () => {
  return (
    <ScrollControls pages={4}>
      <Scroll>
        <Light />
        <FirstVisual />
        <MouseMoveCamera />
      </Scroll>
    </ScrollControls>
  )
}

export default Composition
