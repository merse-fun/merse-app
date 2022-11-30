import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 112px;
  position: absolute;
  left: 160px;
  top: 480px;
  z-index: 1;
`

const Wrapper = styled.div`
  display: flex;
  gap: 160px;
`

const Combine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 2;
`

const Text = styled.span`
  font-family: PS-REGULAR;
  font-size: 24px;
`

const Decor = styled.figure`
  position: absolute;
  top: -50px;
  left: -100px;
  z-index: -1;
`

const LandingDescription = () => {
  return (
    <Container>
      <Wrapper>
        <Combine>
          <Decor>
            <svg width='107' height='107' viewBox='0 0 107 107' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='53.5' cy='53.5' r='53.5' fill='#F0652B' fill-opacity='0.95' />
            </svg>
          </Decor>
          <Text>Hang out w/ friends</Text>
          <Text>Role-play</Text>
          <Text>Fun more — Earn so much</Text>
        </Combine>
        <Combine>
          <Decor>
            <svg width='129' height='119' viewBox='0 0 129 119' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.82362 82.4166L64.3458 5.25541C69.9212 -1.73731 80.9117 -0.393112 84.6376 7.73719L127.656 101.611C131.65 110.325 124.318 119.973 114.853 118.459L10.312 101.747C1.23762 100.296 -2.90532 89.6018 2.82362 82.4166Z'
                fill='#3C64E2'
              />
            </svg>
          </Decor>
          <Text>Working working working</Text>
          <Text>Get paid per weeks</Text>
          <Text>Do jobs you love</Text>
        </Combine>
      </Wrapper>
    </Container>
  )
}

export default LandingDescription
