import React, { useEffect } from 'react'
import { useProgress, Html } from '@react-three/drei'
import { useLoadingStore } from '../stores/loading'

const Loading = () => {
  const { progress } = useProgress()
  const setIsLoaded = useLoadingStore((state) => state.setIsLoaded)

  useEffect(() => {
    console.log(progress)
    if (progress >= 100) setIsLoaded(true)
  }, [progress])

  return (
    <Html>
      {' '}
      <span style={{ color: 'black' }}>{progress} % loaded</span>
    </Html>
  )
}

export default Loading
