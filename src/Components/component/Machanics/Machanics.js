import React from 'react';
import './Machanics.css';
import backgroundImg from '../../Assets/images/untitled.png';
import machaImg from '../../Assets/images/Rectangle51.png';
import machaImg1 from '../../Assets/images/Rectangle5.png';
import machaImg2 from '../../Assets/images/Rectangle2.png';
import WOW from 'wowjs';
import 'animate.css'

const Machanics = () => {
  return (
    <>
    <div className="Machanics-container">
        <div className="Machanics-main-container">
            <img src={backgroundImg} alt="not found" width="100%" />
            <div className="container">
                <div className="container-jour-data">
                <div className="Machanics-data">
                    <p className='container-jour-data-small machanic-data wow animate__fadeInUp' >Breeding Mechanics

</p>
                    <h2 className='container-machanics-big-data wow animate__fadeInUp'>BREED UNIQUE
METAHORNBILLS</h2>
                    </div>    
                </div>
                <div className="machanics-img-container d-flex justify-content-center">
                  <div className="machancs-img-small-cont">
                    <div className="machanics-small-data">
                      <img src={machaImg} alt="not found" width="250px" />
                      <div className="mac-small-data">
                        <span className='mac-small-data'>Metahornbills</span>
                        <span className='mac-small-data-stat'>Status</span>
                      </div>
                      <p className='hatch'>Waiting for hatch</p>
                      <div className="mac-small-data-down">
                        <span className='mac-small-data'>Rare</span>
                        <span className='mac-small-data-stat-dat'>Count down until minting</span>
                      </div>
                      </div>
                  </div>
                  <div className="machancs-img-small-cont">
                  <div className="machanics-small-data">
                  <img src={machaImg2} alt="not found" width="250px" />
                  <div className="mac-small-data">
                        <span className='mac-small-data'>Metahornbills</span>
                        <span className='mac-small-data-stat'>Status</span>
                      </div>
                      <p className='hatch'>Waiting for hatch</p>
                      <div className="mac-small-data-down">
                        <span className='mac-small-data'>Rare</span>
                        <span className='mac-small-data-stat-dat'>Count down until minting</span>
                      </div>
                  </div>
                  </div>
                  <div className="machancs-img-small-cont">
                  <div className="machanics-small-data">
                  <img src={machaImg1} alt="not found" width="250px" />
                  <div className="mac-small-data">
                        <p className='mac-small-data-head'>Metahornbills</p>
                        <p className='mac-small-data-stat'>Status</p>
                      </div>
                      <p className='hatch'>Waiting for hatch</p>
                      <div className="mac-small-data-down">
                        <span className='mac-small-data'>Rare</span>
                        <span className='mac-small-data-stat-dat'>Count down until minting</span>
                      </div>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Machanics