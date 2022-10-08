import React, {useState, useEffect} from 'react';
import './About.css';
import birdImg from '../../Assets/images/duck.gif'
import WOW from 'wowjs';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {

  const [state, setState] = useState(false)

  const hiddenData = () =>{
    setState(!state);
    console.log(state)
  }

 
    useEffect(()=>{
      new WOW.WOW().init();
    })

  return (
    <>
    <div className="about-container">
      <div className="about-main-container container">
        <div className="about-img-div">
          <img src={birdImg} alt="not found" className='about-img-div-data'  />
        </div>
        <div className="about-main-container-data">
          <div className="about-container-data">
          <p className='small-data ' >About Net Zero</p>
          <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
          <h2 style={{display:state?"none":"block"}} className='about-cont-data  '  data-wow-delay="0.3s">PLAY TO IMPACT IN THE REAL WORLD THROUGH GAMING</h2>
          </AnimationOnScroll>
          <div className='wow animate__fadeInDown' style={{display:state?"block":"none"}}  >
          <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
          <p className='about-hidden-data  '>Net Zero is the next biggest sustainability NFT game built on Binance Smart Chain.</p>
          <p className='about-hidden-data'>We aim to educate and increase awareness of the effect greenhouse gas emissions, deforestation and living a more sustainable lifestyle.</p>
          <p className='about-hidden-data'>You will be playing our NFT, the MetaHornbills on a journey to achieve Net Zero and saving the world towards a greener future while earning!</p>
          <p className='about-hidden-data'>You can choose to play either of our two game modes: The Biosphere Mode or the Infinite Runner Mode.</p>
          </AnimationOnScroll>
          </div>
          <div className='drop-down-icon'>
          <svg  onClick={hiddenData} style={{display:state?"block":"none"}}className='drop-down-ico' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="32px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
          <svg  onClick={hiddenData} style={{display:state?"none":"block"}} className='drop-down-ico' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="32px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About