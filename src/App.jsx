import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Services from './components/Services'
import Tools from './components/Tools'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Navbar/>
      <div className='px-5 lg:align-content'>
        <Hero/>
      </div>
      <Team/>
      <Services/>
      <Tools/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App