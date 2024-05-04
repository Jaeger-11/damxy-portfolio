import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] xl:text-lg'>
      <Navbar/>
      <Hero/>
      <div className='md:grid grid-cols-2'>
        <About/>
        <Skills/>
      </div>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
