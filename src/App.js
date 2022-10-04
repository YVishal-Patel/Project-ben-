import React from 'react'
import Ads from './Components/component/Ads/Ads'
import { Navbar } from './Components/component/Navbar/Navbar'
import About from './Components/component/About/About'
import Journey from './Components/component/Journey/Journey'
import Machanics from './Components/component/Machanics/Machanics'
import Team from './Components/component/Team/Team';
import Footer from './Components/component/Footer/Footer'

const App = () => {
  return (
    <>
  <Ads />
  <Navbar />
  <About />
  <Journey />
  <Machanics />
  <Team />
  <Footer />
    </>
  )
}

export default App