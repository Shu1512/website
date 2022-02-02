import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Perf } from 'r3f-perf'
import type { NextPage } from 'next'
import Composition from '@/components/Composition'
import HamburgerMenu from '@/components/HamburgerMenu'
import styles from '@/styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.canvas}>
          <Canvas
            orthographic
            mode="concurrent"
            gl={{ alpha: false }}
            camera={{ zoom: 120, position: [0, 0, 100] }}
          >
            <color attach="background" args={[0x111]} />
            <Perf />
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <Composition />
          </Canvas>
          <div className={styles.scroll}>
            <a href="#">
              <p>TO THE NEXT</p>
              <span></span>
            </a>
          </div>
          <HamburgerMenu />
        </div>
      </main>
    </>
  )
}

export default Home
