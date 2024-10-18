import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-3 rounded-xl mb-4'> Talwind Test</h1>

    <Card  userName="Hay Golu 2k24"/>
    <Card  newUser= "Vikash and shubham"/>
    </>
  )
}

export default App
