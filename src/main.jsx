import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from './pages/hero_section.jsx'
import Project from './pages/project.jsx'
import ContactMe from './pages/contact_me.jsx'
import AboutMe from './pages/about_me.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Skills from './pages/skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skill" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
