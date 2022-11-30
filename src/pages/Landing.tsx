import { OrthographicCamera, softShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence } from 'framer-motion'
import React, { FC, lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Character } from '../components/Character'
import NavigationBar from '../components/NavigationBar'
import Loading from './Loading'

const Header: FC = lazy(() => import('../layout/LandingHeader'))
const SideMenu: FC = lazy(() => import('../layout/SideMenu'))
const Description: FC = lazy(() => import('../components/LandingDescription'))
const Logo: FC = lazy(() => import('../components/LandingLogoText'))

//#region Styles
const Container = styled.section`
  width: 100vw;
  background: #ffffff;
  height: 100vh;
  overflow: hidden;
`

const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
  overflow: hidden;
`

//#endregion

softShadows()

const Landing: FC = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Header />
        <SideMenu />
      </Suspense>
      <SectionContainer>
        <AnimatePresence>
          <Logo />
        </AnimatePresence>
        <Description />
        <CanvasContainer>
          <Canvas>
            <Scene />
          </Canvas>
        </CanvasContainer>
      </SectionContainer>
      <NavigationBar />
    </Container>
  )
}

const Scene = () => {
  return (
    <Suspense fallback={<Loading />}>
      <pointLight castShadow position={[-6.9, -0.3, -0.7]} color='pink' intensity={1} />
      <pointLight castShadow position={[5, 5, 10]} color='white' intensity={2} />
      <OrthographicCamera position={[0, 2, 2]} makeDefault zoom={530} near={-1}>
        <Character />
      </OrthographicCamera>
      <ambientLight intensity={1} />
    </Suspense>
  )
}

export default Landing
