import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


import LandingPage from './paterns/hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <LandingPage/>
    </>
  )
}

export default App
