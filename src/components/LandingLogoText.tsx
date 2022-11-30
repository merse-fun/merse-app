import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Container = styled(motion.div)`
  position: absolute;
  z-index: 0;
  top: 120px;
  left: 90px;
`

const Wrapper = styled(motion.div)`
  display: flex;
  overflow: hidden;
`

const Characters = styled(motion.div)`
  font-size: 454px;
  font-family: GR-BOLD;
  line-height: 400px;
`

const logoContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const characterVariants = {
  initial: {
    y: 500,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const LandingLogoText = () => {
  return (
    <Container>
      <Wrapper variants={logoContainerVariants} initial='initial' animate='animate'>
        <Characters variants={characterVariants}>M</Characters>
        <Characters variants={characterVariants}>E</Characters>
        <Characters variants={characterVariants}>R</Characters>
        <Characters variants={characterVariants}>S</Characters>
        <Characters variants={characterVariants}>E</Characters>
      </Wrapper>
    </Container>
  )
}

export default LandingLogoText
