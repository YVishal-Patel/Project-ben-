import React from 'react'
import Ads from './Components/component/Ads/Ads'
import { Navbar } from './Components/component/Navbar/Navbar'
import About from './Components/component/About/About'
import Journey from './Components/component/Journey/Journey'
import Machanics from './Components/component/Machanics/Machanics'
import Team from './Components/component/Team/Team';
import Footer from './Components/component/Footer/Footer'
import Home from './Components/component/Home/Home'
import RoadMap from './Components/component/RoadMap/RoadMap'
import Demo from './Components/component/About/Demo'
import RoadMapCard4 from './Components/component/RoadMap/RoadMapCard4'
// import MultipleItems from './Components/component/RoadMap/RoadMapCard'

const App = () => {
  return (
    <>
   <Ads />
   <Navbar />
   <About />
  <Journey /> 
  <Machanics />
  <RoadMap />
   <Team />
  <Footer /> 
    </>
  )
}

export default App