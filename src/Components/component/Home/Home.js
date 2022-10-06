import React, {useEffect} from 'react'
import './Home.css'
import mainImg from '../../Assets/images/heromiddle.png';
import leftCloud from '../../Assets/images/whitecloud2.png';
import rightCloud from '../../Assets/images/whitecloud1.png';
import ReactWOW from 'react-wow';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import WOW from 'wowjs';
import 'animate.css'

const Home = () => {
  useEffect(()=>{
    new WOW.WOW().init();
  },[] )
  return (
    <>
    <div className="home-container">
    
        <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInLeft'>
      <div className="left-home-cloud "  >
        <img className="left-home-cloud-data" src={leftCloud} alt="not found"  />
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__fadeInUp'
  animateOut='fadeOut'>
        <div className="home-container-data ">
          <img className='main-img-data' src={mainImg} alt="not found" />
        </div>
        </AnimationOnScroll>
         
        <div className="right-home-cloud wow  ">
        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <img src={rightCloud} alt="not found" width="200px !important" height="200px" />
        </AnimationOnScroll>
      </div>
    </div>
    </>
  )
}

export default Home