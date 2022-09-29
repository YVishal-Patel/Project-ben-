import React, {useRef} from 'react';
import './Ads.css'

const Ads = () => {

    let ref = useRef('');

    const adsRemove = () =>{
        ref.current.style.display = "none";
    }
  return (
    <>
   <div className="ads-container">
    <div ref={ref} className="ads-main">
        <span className="ads-data">Minting will start soon at afincoin.io/nft</span>
        <button className="ads-main-btn">Get on the whitelist</button>
        <svg onClick={adsRemove} style={{marginTop:"-0.3rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class=" cross-ads-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
   </div>
    </>
  )
}

export default Ads;