import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Background from '../components/Background'
import Project from '../components/Project'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <main>
        <Hero/>
        <Skills/>
        <Background/>
        <Project/>
        <Contact/>
    </main>
  )
}

export default HomePage