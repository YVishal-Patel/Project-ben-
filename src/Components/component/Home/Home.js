import React, {useEffect} from 'react'
import './Home.css'
import mainImg from '../../Assets/images/heromiddle.png';
import leftCloud from '../../Assets/images/whitecloud2.png';
import rightCloud from '../../Assets/images/whitecloud1.png';
import ReactWOW from 'react-wow';
import WOW from 'wowjs';
import 'animate.css'

const Home = () => {
  useEffect(()=>{
    new WOW.WOW().init();
  },[] )
  return (
    <>
    <div className="home-container">
      <div className="left-home-cloud wow slideInLeft wow animate__fadeInLeft"  >
        <img className="left-home-cloud-data" src={leftCloud} alt="not found"  />
      </div>
        <div className="home-container-data wow animate__fadeInUp">
          <img className='main-img-data' src={mainImg} alt="not found" />
        </div>
        <div className="right-home-cloud wow animate__fadeInRight ">
        <img src={rightCloud} alt="not found" width="200px !important" height="200px" />
      </div>
    </div>
    </>
  )
}

export default Home