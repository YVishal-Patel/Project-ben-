import React, {useEffect} from 'react';
import './Machanics.css';
import backgroundImg from '../../Assets/images/untitled.png';
import WOW from 'wowjs';
import img1 from '../../Assets/images/img1.svg';
import img2 from '../../Assets/images/img2.svg';
import img3 from '../../Assets/images/img3.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';


import 'animate.css'

const Machanics = () => {
  useEffect(()=>{
    new WOW.WOW().init();
  })
  return (
    <>
    <div className="Machanics-container">
        <div className="Machanics-main-container">
            <img src={backgroundImg} alt="not found" width="100%" height="390px" />
            <div className="container ">
                <div className="container-jour-data">
                <div className="Machanics-data">
            <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
                    <p className='container-jour-data-small machanic-data wow animate__fadeInUp' >Breeding Mechanics

</p>
                    <h2 className='container-machanics-big-data wow '>BREED UNIQUE
METAHORNBILLS</h2>
                </AnimationOnScroll>
                    </div>    
                </div>
                <div className='static-machanics-img'>
                <AnimationOnScroll className='left-data-item' animateIn='animate__fadeIn'>
                  <img src={img1} alt="not found" className="img_rotate " />
                  <img src={img2} alt="not found" className="img_machan2 " data-wow-delay="0.3s"  />
                  <img src={img3} alt="not found" className="img_macha3 " data-wow-delay="0.5s" />
                  </AnimationOnScroll>
                </div>
                <div className="mechna-btns">
                <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
                <button className='me-btn wow animate__fadeInUp'> Go on the whitelist</button>
                </AnimationOnScroll>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Machanics