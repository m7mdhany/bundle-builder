import { useState } from 'react'
import './App.css'
import useBundle from './hooks/useBundle'
import Builder from "./components/builder/Builder";
import ReviewPanel from "./components/review/ReviewPanel";

function App() {
  const { state, dispatch } = useBundle()

  console.log('state', state)

  return (
    <main>
      <Builder />
      <ReviewPanel />
    </main>
  )
}

export default App
