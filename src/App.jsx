import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  return (
    <div className=' xl:text-lg'>
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
