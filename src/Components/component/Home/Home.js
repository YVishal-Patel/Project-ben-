import React from 'react'
import './Home.css'
import mainImg from '../../Assets/images/heromiddle.png';
import leftCloud from '../../Assets/images/whitecloud2.png';
import rightCloud from '../../Assets/images/whitecloud1.png';


const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="left-home-cloud">
        <img className="left-home-cloud-data" src={leftCloud} alt="not found"  />
      </div>
        <div className="home-container-data">
          <img className='main-img-data' src={mainImg} alt="not found" />
        </div>
        <div className="right-home-cloud">
        <img src={rightCloud} alt="not found" width="200px !important" height="200px" />
      </div>
    </div>
    </>
  )
}

export default Home