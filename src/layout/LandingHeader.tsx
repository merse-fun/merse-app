import React, { FC, useCallback } from 'react'
import styled from 'styled-components'
import { useLandingStore } from '../stores/landing'

const Container = styled.header`
  width: 100vw;
  height: 160px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`

const LogoContainer = styled.div`
  margin-left: 120px;
`

const LogoWrapper = styled.picture`
  cursor: var(--cursor-pointer);
`

const HambugerMenuContainer = styled.div`
  margin-right: 120px;
`

const HambugerMenuWrapper = styled.picture`
  cursor: var(--cursor-pointer);
`

const LandingHeader: FC = () => {
  const [setIsOpenMenu] = useLandingStore((state) => [state.setIsOpenMenu])

  const openMenu = () => setIsOpenMenu(true)

  return (
    <Container>
      <LogoContainer>
        <LogoWrapper>
          <svg width='57' height='38' viewBox='0 0 57 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0_2_39)'>
              <path
                d='M41.1094 1.29136L55.715 15.897C57.4737 17.6559 57.4737 20.5079 55.715 22.2669L41.1094 36.8725C38.2719 39.71 33.4202 37.7004 33.4202 33.6876V4.47635C33.4202 0.463495 38.2719 -1.54615 41.1094 1.29136Z'
                fill='#0B0339'
                fill-opacity='0.9'
              />
              <path
                d='M7.70657 1.29145L22.3122 15.8971C24.0711 17.656 24.0711 20.508 22.3122 22.267L7.70657 36.8726C4.86905 39.7101 0.017334 37.7005 0.017334 33.6877V4.47644C0.017334 0.463586 4.86905 -1.54606 7.70657 1.29145Z'
                fill='#0B0339'
                fill-opacity='0.9'
              />
              <path
                d='M20.2442 1.28496C22.0032 -0.474058 24.8552 -0.474051 26.6141 1.28496L41.01 15.6808C42.769 17.4398 42.769 20.2917 41.01 22.0508L26.6141 36.4465C24.8551 38.2056 22.0032 38.2056 20.2442 36.4465L5.84838 22.0508C4.08936 20.2917 4.08936 17.4398 5.84838 15.6808L20.2442 1.28496Z'
                fill='#0B0339'
                fill-opacity='0.9'
              />
            </g>
            <defs>
              <clipPath id='clip0_2_39'>
                <rect width='57' height='38' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </LogoWrapper>
      </LogoContainer>
      <HambugerMenuContainer>
        <HambugerMenuWrapper onClick={openMenu}>
          <svg width='40' height='24' viewBox='0 0 40 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='40' height='4' rx='2' fill='black' />
            <rect y='10' width='40' height='4' rx='2' fill='black' />
            <rect y='20' width='40' height='4' rx='2' fill='black' />
          </svg>
        </HambugerMenuWrapper>
      </HambugerMenuContainer>
    </Container>
  )
}

export default LandingHeader
