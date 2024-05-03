import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <div className='md:grid grid-cols-2'>
        <About/>
        <Skills/>
      </div>
      <Projects/>
    </div>
  )
}

export default App
