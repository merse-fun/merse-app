import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useLandingStore } from '../stores/landing'
import { useLoadingStore } from '../stores/loading'

const Container = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`

const Wrapper = styled.div`
  padding: 12px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e3e3e3;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  display: flex;
  gap: 12px;
`

const CTAButtonContainer = styled(motion.a)`
  padding: 22px 72px;
  background: linear-gradient(
    266.42deg,
    #fc7d48 16.89%,
    rgba(245, 99, 37, 0.95) 53.27%,
    rgba(240, 101, 43, 0.95) 88.16%
  );
  border-radius: 12px;
`

const NormalButton = styled.button`
  padding: 22px 40px;
  border-radius: 12px;
  background: transparent;
  opacity: 0.6;

  &:hover {
    outline: 2px solid #c7c7c7;
  }
`

const ButtonText = styled.span<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 20px;
  font-family: GR-BOLD;
`

const navVariants = {
  initial: {
    bottom: -150,
    transition: {
      duration: 0.35,
    },
  },
  animate: {
    bottom: 40,
    transition: {
      duration: 0.75,
      delay: 0.25,
    },
  },
}

const NavigationBar = () => {
  const isLoaded = useLoadingStore((state) => state.isLoaded)
  const [isOpenMenu, setIsOpenMenu] = useLandingStore((state) => [state.isOpenMenu, state.setIsOpenMenu])

  return (
    <Container initial='initial' animate={!isOpenMenu && isLoaded ? 'animate' : 'initial'} variants={navVariants}>
      <Wrapper>
        <CTAButtonContainer whileHover={{ scale: 0.95 }} href='http://city.merse.fun'>
          <ButtonText textColor='#fff'>Hop into Merse City</ButtonText>
        </CTAButtonContainer>
        <NormalButton>
          <ButtonText textColor='#000'>Mint</ButtonText>
        </NormalButton>
        <NormalButton>
          <ButtonText textColor='#000'>For Seller</ButtonText>
        </NormalButton>
      </Wrapper>
    </Container>
  )
}

export default NavigationBar
