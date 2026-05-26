import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeroSection from './pages/hero_section'
import AboutMe from './pages/about_me'
import Skills from './pages/skills'
import Project from './pages/project'
import Nav from './components/nav'
import ContactMe from './pages/contact_me'

function App() {
  return (
    // Uses your theme's registered primary background color
    <div className="bg-primary min-h-screen selection:bg-secondary/20 selection:text-white">
      <Nav />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Project />
      <ContactMe />
    </div>
  )
}

export default App