import { useState } from 'react'
import './App.css'
import useBundle from './hooks/useBundle'

function App() {
  const { state, dispatch } = useBundle()

  console.log('state', state)

  return (
    <>
      <h1>Bundle Builder</h1>
    </>
  )
}

export default App
