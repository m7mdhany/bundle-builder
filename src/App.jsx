import { useState } from 'react'
import './App.css'
import useBundle from './hooks/useBundle'
import BuilderLayout from "./components/layout/BuilderLayout";

function App() {
  const { state, dispatch } = useBundle()

  console.log('state', state)

  return <BuilderLayout />;

}

export default App
