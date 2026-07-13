import { useState } from 'react'
import './App.css'
import useBundle from './hooks/useBundle'

function App() {
  const { state, dispatch } = useBundle()

  console.log('state', state)

  return (
    <>
      <h1>Current Step: {state.currentStep}</h1>

      <button
        onClick={() =>
          dispatch({
            type: "NEXT_STEP",
          })
        }
      >
        Next
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "PREVIOUS_STEP",
          })
        }
      >
        Previous
      </button>
    </>
  )
}

export default App
