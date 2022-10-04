import React, {useEffect} from 'react'
import './Footer.css';
import WOW from 'wowjs';
import backgroundImg from '../../Assets/images/footerbg.png'
import binance from '../../Assets/images/binance1.svg';
import poweredBy from '../../Assets/images/powered.svg';
import zipmex from '../../Assets/images/zipmex.png';
import uniswap from '../../Assets/images/uniswap1.svg'
import pancake from '../../Assets/images/pancake.png';
import unity from '../../Assets/images/unity1.svg';
import bitmart from '../../Assets/images/bitmart.svg';
import funfit from '../../Assets/images/toFuNft.png';
import boy from '../../Assets/images/boy.png';
import Logo from '../../Assets/images/LogoUpdated.png';
import twitter from '../../Assets/images/twitter.png';
import discord from '../../Assets/images/discord.png';
import footerLogo from '../../Assets/images/footerLogo.svg';



const Footer = () => {
    useEffect(()=>{
        new WOW.WOW().init();
      })
  return (
    <>
    <div className="footer-container">
        <div className="footer-container-main">
            <div className="container">
            <div className="img-bottom">
                <img src={backgroundImg} alt="not found" className='img-bottom' />
            </div>
            <div className="container-jour-data">
                <div className="Machanics-data">
                    <p className='container-jour-data-small machanic-data wow animate__fadeInUp' >The Metaverse

</p>
                    <h2 className='container-machanics-big-data footer-data wow animate__fadeInUp'>Partners and ecosystem</h2>
                    </div>    
                </div>
                <div className="footer-down-data">

                <div className="footer-brand-img">
                    <div className="footer-brand-img-data wow animate__fadeInUp">
                        <img src={poweredBy} alt="not found" className='footer-brand-binance' />
                    </div>
                    <div className="footer-brand-img-data wow animate__fadeInUp ">
                    <img src={binance} alt="not found"  />
                    </div>
                </div>
                  
                <div className="footer-brand-img-middle img-middle-right  wow animate__fadeInUp">
                <div className="footer-brand-img-data-zipmax">
                        <img src={zipmex} alt="not found"  className='footer-brand-zipmex' />
                    </div>
                    <div className="footer-brand-img-data">
                        <img src={uniswap} alt="not found" className='footer-brand-zipmex' />
                    </div>
                    <div className="footer-brand-img-data">
                        <img src={pancake} alt="not found" className='footer-brand-binance' />
                    </div>
                </div>

                <div className="footer-brand-img-middle wow animate__fadeInUp">
                <div className="footer-brand-img-data-zipmax">
                        <img src={unity} alt="not found"  className='footer-brand-zipmex' />
                    </div>
                    <div className="footer-brand-img-data">
                        <img src={bitmart} alt="not found" className='footer-brand-zipmex' />
                    </div>
                    <div className="footer-brand-img-data">
                        <img src={funfit} alt="not found" className='footer-brand-binance' />
                    </div>
                </div>

                <div className="our-community-discord-component">
                  <div className="our-community-discord-main">
                    <div className="discord-data wow animate__fadeInUp">
                    <p className='our-community-discord-main-head'>Join our community on Discord Now</p>
                    <p className='our-community-discord-main-desc'>join today and you'll be updated on the latest NFT release and game updates.</p>
                    </div>
                    <div className="discord-img">
                        <img src={boy} alt="not found" className='discord-img-data'  />
                    </div>
                    
                  </div>
                </div>

                <div className="footer-last-div">
                    <div className="footer-last-div-data">
                      <img src={Logo} alt="not found" className=' wow animate__fadeInUp' width="150px" />
                      <p className='footer-last-div-data-para wow animate__fadeInUp'>Powered by the team at <span className='linked-discord'> afincoin.io </span></p>
                      <div className="footer-linked-data">
                       <img src={discord} alt="not found" className="footer-linked-img wow animate__fadeInUp" />
                       <img src={twitter} alt="not found" className="footer-linked-img wow animate__fadeInUp" />
                       <img src={footerLogo} alt="not found" className="footer-linked-img wow animate__fadeInUp" />
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

export default Footer