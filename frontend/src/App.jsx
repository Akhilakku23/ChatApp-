import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './home/left/Left'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    App
    <Left/>
    </>
  )
}

export default App
