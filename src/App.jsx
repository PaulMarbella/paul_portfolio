import { useEffect } from 'react'
import Header from './pages/header/header'
import Hero from './pages/hero/hero'
import './App.css'
import About from './pages/about/about'
import Skills from './pages/skills/skills'
import Projects from './pages/projects/projects'
import Contacts from './pages/contacts/contacts'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);

  return (
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
  )
}

export default App
