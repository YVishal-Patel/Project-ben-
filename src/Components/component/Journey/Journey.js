import React, {useEffect} from 'react';
import './Journey.css';
import ReactWOW from 'react-wow';
import img1 from '../../Assets/images/video2.mp4';
import img2 from '../../Assets/images/video1.mp4'
import backgroundImg from '../../Assets/images/untitled.png'
import WOW from 'wowjs';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Journey = () => {
  useEffect(()=>{
    new WOW.WOW().init();
  })
  return (
    <>
    <div className="journey-container">
        <div className="journey-main-container ">
            <img src={backgroundImg} alt="not found"  width="100%" height="380px" />
            </div>
            <div className="container">
                <div className="container-jour-data main-data ">
                <div className="journey-data jour-data-new">
                <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
                    <p className='container-jour-data-small '  data-wow-delay="0.3s">Game Modes</p>
                    <h2 className='container-jour-data-big-data '  data-wow-delay="0.4s">Choose Your Journey</h2>
                    </AnimationOnScroll>
                    </div>       
                </div>
                <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
                <div className="jour-container d-flex justify-content-between "  data-wow-delay="0.4s">
                  <div className="img-jour-cont1">
                    <video alt="not found" width="500px" controls >
                    <source src={img1} type="video/mp4"/>
                      </video>
                    <div className="img-jour-cont1-data">
                      <p className='jour-img-head text-center mt-3'>Building Biosphere Mode</p>
                      <p className='jour-img-desc'>Located on the heart of Nirand Forest, this will be your home base. You will be able to explore the land, spend your GREEN coin and so much more.</p>
                    </div>
                  </div>
                  <div className="img-jour-cont1 ">
                    <video  alt="not found" width="500px" controls>
                    <source src={img2} type="video/mp4"/>
                      </video>
                    <div className="img-jour-cont1-data">
                      <p className='jour-img-head text-center mt-3'>Building Biosphere Mode</p>
                      <p className='jour-img-desc'>You will be playing as Max and together with your MetaHornbill, running and exploring through the different endless Nirand Forest trails.</p>
                    </div>
                  </div>
                </div>
                  </AnimationOnScroll>
            </div>
        
    </div>
    </>
  )
}

export default Journey