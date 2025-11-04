import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Inventory from './components/Inventory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header Heading="Big Boy Cars"/>
      <Inventory />
      <Footer email = "contat@gmail.com"/>

    </>
  )
}

export default App
