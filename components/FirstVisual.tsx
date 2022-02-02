import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Models from '@/components/Models'

const loader = new TextureLoader()

const FirstVisual: React.VFC = () => {
  return (
    <>
      {Models.map((model, i) => {
        const texture: THREE.Texture = loader.load(model.map)
        return (
          <mesh key={i} position={model.position}>
            <sphereGeometry args={model.args} />
            {model.isSun ? (
              <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
            ) : (
              <meshLambertMaterial map={texture} side={THREE.DoubleSide} />
            )}
          </mesh>
        )
      })}
      <Text
        position={[0, 0, 10]}
        fontSize={1.5}
        font={'fonts/bungee_hairline/BungeeHairline-Regular.ttf'}
        anchorX="center"
        anchorY="middle"
      >
        TEAM LAN
      </Text>
    </>
  )
}

export default FirstVisual
