import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Text } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { NextPage } from 'next'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import FirstVisual from '@/components/FirstVisual'
import Light from '@/components/Light'

const MouseMoveCamera = () => {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
      0.01
    )
  )
}

const Scroll: NextPage = () => {
  return (
    <Parallax pages={4}>
      <ParallaxLayer offset={0}>
        <Canvas
          orthographic
          gl={{ alpha: false }}
          camera={{ zoom: 120, position: [0, 0, 100] }}
        >
          <Perf />
          <color attach="background" args={[0x000000]} />
          <Light />
          <Text
            position={[0, 0, 5]}
            fontSize={1.5}
            font={'Bungee_Hairline/BungeeHairline-Regular.ttf'}
            anchorX="center"
            anchorY="middle"
          >
            TEAM LAN
          </Text>
          <FirstVisual />
          <MouseMoveCamera />
          <MouseMoveCamera />
        </Canvas>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <Canvas>
          <mesh>
            <sphereGeometry />
            <meshBasicMaterial color={0xff00ff} />
          </mesh>
        </Canvas>
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <Canvas>
          <mesh>
            <sphereGeometry />
            <meshBasicMaterial color={0xff00ff} />
          </mesh>
        </Canvas>
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <Canvas>
          <mesh>
            <sphereGeometry />
            <meshBasicMaterial color={0xff00ff} />
          </mesh>
        </Canvas>
      </ParallaxLayer>
    </Parallax>
  )
}

export default Scroll
