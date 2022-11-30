import React from 'react'
import { useProgress, Html } from '@react-three/drei'

const Loading = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <Html center>
      <span style={{ color: 'white' }}>{progress} % loaded</span>
    </Html>
  )
}

export default Loading
