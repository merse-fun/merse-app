import { motion } from 'framer-motion'
import React, { FC, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLandingStore } from '../stores/landing'

//#region Styles

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

const Overlay = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`

const CloseButtonContainer = styled.div`
  position: absolute;
  right: 124px;
  top: 64px;
`

const CloseButtonWrapper = styled(motion.figure)`
  cursor: var(--cursor-pointer);
  display: flex;
`

const MenuContainer = styled(motion.div)`
  width: 880px;
  height: 100%;
  background: #fff;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`

const MenuWrapper = styled.div`
  --margin-top: 160px;
  --margin-bottom: 56px;

  margin: var(--margin-top) 100px var(--margin-bottom) 100px;
  display: flex;
  height: calc(100% - var(--margin-top) - var(--margin-bottom));
  flex-direction: column;
  justify-content: space-between;
`

const NavigationContainer = styled(motion.div)``

const NavigationWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  list-style: none;
  gap: 40px;
`

const NavigationItem = styled(motion.li)`
  cursor: var(--cursor-pointer);
  color: rgba(11, 3, 57, 0.7);
  transition: color 0.25s ease;
  position: relative;

  &:hover {
    color: rgba(11, 3, 57, 1);
  }
`

const FooterContainer = styled(motion.div)``

const FooterWrapper = styled(motion.div)`
  display: flex;
  gap: 40px;
`

const ExternalLink = styled.span`
  font-size: 20px;
  opacity: 0.7;
  transition: color 0.25s ease;

  &:hover {
    opacity: 1;
  }
`

const Title = styled.span`
  font-size: 100px;
  line-height: 121px;
`

const Decor = styled(motion.figure)`
  position: absolute;
`

//#endregion

//#region Variants

const decorOneVariants = {
  initial: {
    opacity: 0,
    top: 20,
    left: 50,
  },
  hover: {
    opacity: 1,
    top: -20,
    left: -60,
    rotate: 100,
  },
}

const decorTwoVariants = {
  initial: {
    opacity: 0,
    top: 20,
    right: 50,
  },
  hover: {
    opacity: 1,
    top: -40,
    right: 30,
    rotate: 100,
  },
}

const decorThreeVariants = {
  initial: {
    opacity: 0,
    bottom: -20,
    right: 80,
  },
  hover: {
    opacity: 1,
    bottom: -50,
    right: 180,
    rotate: 100,
  },
}

const items = [
  {
    id: 1,
    text: 'Home',
  },
  {
    id: 2,
    text: 'Ecosystem',
  },
  {
    id: 3,
    text: 'Token',
  },
  {
    id: 4,
    text: 'Our Team',
  },
]

const overlayVariants = {
  initial: {
    opacity: 0,
    transition: {
      delay: 0.15,
    },
  },
  animate: {
    opacity: 1,
  },
}

const menuVariants = {
  initial: {
    right: -880,
  },
  animate: {
    right: 0,
    transition: {
      delay: 0.25,
    },
  },
}

//#endregion

const arr = [
  <svg width='63' height='63' viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_b_2_100)'>
      <circle cx='31.5' cy='31.5' r='31.5' fill='#F0652B' fill-opacity='0.8' />
    </g>
    <defs>
      <filter
        id='filter0_b_2_100'
        x='-5'
        y='-5'
        width='73'
        height='73'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'>
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='2.5' />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_2_100' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_2_100' result='shape' />
      </filter>
    </defs>
  </svg>,
  <svg width='87' height='87' viewBox='0 0 87 87' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='43.5' cy='43.5' r='43.5' fill='#F0652B' fill-opacity='0.95' />
  </svg>,
  <svg width='82' height='76' viewBox='0 0 82 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_b_2_98)'>
      <path
        d='M11.2651 8.68944L68.0775 0.775275C77.0763 -0.478294 84.1499 8.33535 80.9782 16.8495L62.1662 67.3494C59.0118 75.8172 47.9838 77.8922 41.9675 71.1499L3.96713 28.5642C-2.42184 21.4043 1.76085 10.0134 11.2651 8.68944Z'
        fill='#0F3CCA'
        fill-opacity='0.7'
      />
    </g>
    <defs>
      <filter
        id='filter0_b_2_98'
        x='-4.09277'
        y='-4.34442'
        width='90.8418'
        height='84.5085'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'>
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='2.5' />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_2_98' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_2_98' result='shape' />
      </filter>
    </defs>
  </svg>,
]

const SideMenu: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useLandingStore((state) => [state.isOpenMenu, state.setIsOpenMenu])
  const closeMenu = () => setIsOpenMenu(false)

  const random = useCallback(() => arr[Math.floor(Math.random() * arr.length)], [])

  return (
    <>
      <Container>
        <Overlay initial='initial' animate={isOpenMenu ? 'animate' : 'initial'} variants={overlayVariants} />
        <MenuContainer initial='initial' animate={isOpenMenu ? 'animate' : 'initial'} variants={menuVariants}>
          <MenuWrapper>
            <CloseButtonContainer>
              <CloseButtonWrapper whileHover={{ rotate: 90 }} onClick={closeMenu}>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect
                    x='31.5566'
                    y='3.27209'
                    width='40'
                    height='4'
                    rx='2'
                    transform='rotate(135 31.5566 3.27209)'
                    fill='black'
                  />
                  <rect
                    x='3.27197'
                    y='0.443665'
                    width='40'
                    height='4'
                    rx='2'
                    transform='rotate(45 3.27197 0.443665)'
                    fill='black'
                  />
                </svg>
              </CloseButtonWrapper>
            </CloseButtonContainer>

            <NavigationContainer>
              <NavigationWrapper>
                {items.map((item) => (
                  <NavigationItem initial='initial' whileHover='hover'>
                    <Decor variants={decorOneVariants}>{random()}</Decor>
                    <Decor variants={decorTwoVariants}>{random()}</Decor>
                    <Decor variants={decorThreeVariants}>{random()}</Decor>
                    <Title>{item.text}</Title>
                  </NavigationItem>
                ))}
              </NavigationWrapper>
            </NavigationContainer>

            <FooterContainer>
              <FooterWrapper>
                <Link to='https://github.com/merse-fun' target='_blank'>
                  <ExternalLink>github.com/merse-fun</ExternalLink>
                </Link>
                <Link to='https://twitter.com/merse_fun' target='_blank'>
                  <ExternalLink>@merse_fun</ExternalLink>
                </Link>
              </FooterWrapper>
            </FooterContainer>
          </MenuWrapper>
        </MenuContainer>
      </Container>
    </>
  )
}

export default SideMenu
