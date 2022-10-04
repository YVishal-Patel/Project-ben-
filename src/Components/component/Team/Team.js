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
                    <p className='container-jour-data-small machanic-data wow animate__fadeInUp' >Team

</p>
                    <h2 className='container-machanics-big-data team-big-data wow animate__fadeInUp'>MEET THE AFINIONS</h2>
                    </div>    
                </div>
                <div className="team-card">
                    <div className="team-card-component-data">
                    <div className="team-card-component-data1 wow animate__fadeInLeft" data-wow-delay="0.5s">
                    <TeamCard img={img1} name="Sebastian" des="Project Lead" />
                    </div>
                    <div className="team-card-component-data2 wow animate__fadeInRight " data-wow-delay="0.5s">
                    <TeamCard img={img2} name="Ben" des="Game Lead" />
                    </div>
                    </div>
                    <div className="team-card-component-last-data">
                    <div className="team-card-component-data3 wow animate__fadeInLeft" data-wow-delay="0.2s">
                    <TeamCard img={img3} name="Toon" des="Unity Developer" />
                    </div>
                    <div className="team-card-component-data4 wow animate__fadeInUp" data-wow-delay="0.2s">
                    <TeamCard img={img4} name="Prim" des="3D Artist + Animator" />
                    </div>
                    <div className="team-card-component-data5 wow animate__fadeInRight" data-wow-delay="0.2s">
                    <TeamCard img={img5} name="Shuu" des="Designer" />
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