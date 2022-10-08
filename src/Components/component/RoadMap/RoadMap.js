import React from 'react';
import img1 from '../../Assets/images/image24.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Responsive from  './RoadMapCard.js'
import Responsive2 from './RoadMapCard2.js'
import Responsive3 from './RoadMapCard3.js';
import RoadMapCard4 from './RoadMapCard4'
import './RoadMap.css'

const RoadMap = () => {
  return (
    <>
    <div className="roadmap-container">
        <div className="roadmap-container-main">
        <img src={img1} alt="not found" className='roadmap-main-img' />
        </div>
        <div className="container">
        <div className="container-jour-data">
                <div className="Machanics-data">
            <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
                    <p className='container-jour-data-small machanic-data wow animate__fadeInUp' >Roadmap

</p>
                    <h2 className='container-machanics-big-data roadMap-big-data '>Planet AfIn ExpansIon</h2>
                </AnimationOnScroll>
                    </div>    
                </div>
                <div className="res-first">
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                <Responsive />
                </AnimationOnScroll>
                </div>

                <div className="res-first">
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                <Responsive2 />
                </AnimationOnScroll>
                </div>

                <div className="res-first">
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                <Responsive3 />
                </AnimationOnScroll>
                </div>

                <div className="res-first">
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                <RoadMapCard4 />
                </AnimationOnScroll>
                </div>
        </div>
    </div>
     </>
  )
}

export default RoadMap