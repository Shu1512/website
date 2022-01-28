import { NextPage } from 'next'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Models from '@/components/Models'

const loader = new TextureLoader()

const FirstVisual: NextPage = () => {
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
    </>
  )
}

export default FirstVisual
