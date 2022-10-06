import React, {useEffect} from 'react'
import './Team.css';
import backgroundImg from '../../Assets/images/untitled.png';
import TeamImg1 from '../../Assets/images/teamCard1.svg';
import img1 from '../../Assets/images/teamCard1.svg'
import img2 from '../../Assets/images/teamCard2.svg'
import img3 from '../../Assets/images/teamCard3.svg'
import img4 from '../../Assets/images/teamCard4.svg'
import img5 from '../../Assets/images/teamCard5.svg'
import WOW from 'wowjs';
import TeamCard from './TeamCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Team = () => {
useEffect(()=>{
        new WOW.WOW().init();
  })
  return (
    <>
    <div className="team-container">
        <div className="team-main-container">
        <img src={backgroundImg} alt="not found" width="100%" height="390px" />
        <div className="container">
        <div className="container-jour-data">
                <div className="Machanics-data">
                <AnimationOnScroll className='left-data-item' animateIn='animate__fadeInUp'>
                    <p className='container-jour-data-small machanic-data wow animate__fadeInUp' >Team

</p>
                    <h2 className='container-machanics-big-data team-big-data wow animate__fadeInUp'>MEET THE AFINIONS</h2>
                    </AnimationOnScroll>
                    </div>    
                </div>
                <div className="team-card">
                    <div className="team-card-component-data">
                    <div className="team-card-component-data1 " data-wow-delay="0.5s">
                    <AnimationOnScroll  animateIn='animate__fadeInLeft'>
                    <TeamCard img={img1} name="Sebastian" des="Project Lead" />
                    </AnimationOnScroll>
                    </div>
                    <div className="team-card-component-data2 " data-wow-delay="0.5s">
                    <AnimationOnScroll  animateIn='animate__fadeInRight'>
                    <TeamCard img={img2} name="Ben" des="Game Lead" />
                    </AnimationOnScroll>
                    </div>
                    </div>
                    <div className="team-card-component-last-data">
                    <div className="team-card-component-data3 " data-wow-delay="0.2s">
                    <AnimationOnScroll  animateIn='animate__fadeInLeft'>
                    <TeamCard img={img3} name="Toon" des="Unity Developer" />
                    </AnimationOnScroll>
                    </div>
                    <div className="team-card-component-data4 " data-wow-delay="0.2s">
                    <AnimationOnScroll  animateIn='animate__fadeInUp'>
                    <TeamCard img={img4} name="Prim" des="3D Artist + Animator" />
                    </AnimationOnScroll>
                    </div>
                    <div className="team-card-component-data5 " >
                    <AnimationOnScroll  animateIn='animate__fadeInRight' data-wow-delay="0.2s">
                    <TeamCard img={img5} name="Shuu" des="Designer" />
                    </AnimationOnScroll>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Team