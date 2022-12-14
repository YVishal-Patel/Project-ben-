import React, {useRef, useState} from 'react';
import './Navbar.css'
import { header } from '../Data';
import img1 from '../../../Components/Assets/images/Logo.png';
import youtube from '../../../Components/Assets/images/download.png';
import egg from '../../../Components/Assets/images/Egg.png';
import Home from '../Home/Home';



export const Navbar = () => {
    const ref = useRef(true);
    const hiddenData = useRef(true)
    const [state, setState] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(false);

    const showToggleData = () =>{
        setState(!state)
        ref.current.style.display = state? "block" : "none";
    }

    console.log(hiddenMenu)
  return (
    <>
    <div className="navbar-container">
        <div className="container container-main-head-data-main">
        <div className="navbar-cont-data">
            <div className="navbar-left-div">
                <div className="navbar-logo" data-wow-iteration="infinite">
                    <img src={img1} alt="not found" width="100px" />
                </div>    
            </div>

            <div className="navbar-center-div">
                {header.map((item, idx)=>{
     return      <div key={idx} className="middle-cont-header">
                  <div className="header-middle-data">{item}</div>
     </div>         
                })}

                 <svg onClick={showToggleData} className="down-svg-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>

                 <div ref={ref} className="toggle-navbar-data">
            <div className="toggle-main-data">
                <svg width="20" height="15" class="mr-2" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9307 1.24404C15.6558 0.669081 14.2892 0.244109 12.86 0.00245831C12.8473 1.50672e-05 12.8341 0.00158958 12.8223 0.00696413C12.8105 0.0123387 12.8007 0.0212473 12.7942 0.0324563C12.6192 0.339936 12.4242 0.740743 12.2875 1.05739C10.7718 0.830935 9.23089 0.830935 7.71518 1.05739C7.56296 0.706463 7.39131 0.364288 7.20103 0.0324563C7.19458 0.0211093 7.18482 0.0119992 7.17306 0.0063415C7.16129 0.000683842 7.14809 -0.00125226 7.13519 0.000791676C5.7069 0.242442 4.34028 0.667415 3.06448 1.24321C3.0535 1.24781 3.0442 1.25566 3.03781 1.26571C0.444554 5.07796 -0.266258 8.79605 0.0828981 12.4675C0.0838697 12.4765 0.086661 12.4852 0.091102 12.493C0.095543 12.5009 0.101541 12.5078 0.108731 12.5133C1.62235 13.6153 3.31059 14.4547 5.10275 14.9965C5.11525 15.0003 5.12861 15.0003 5.1411 14.9964C5.15358 14.9926 5.16461 14.985 5.17275 14.9748C5.55774 14.4582 5.90106 13.9124 6.19439 13.3391C6.21189 13.3058 6.19522 13.2658 6.16022 13.2524C5.62191 13.0497 5.10032 12.8051 4.60027 12.5208C4.59128 12.5157 4.58371 12.5084 4.57823 12.4996C4.57275 12.4908 4.56954 12.4808 4.56888 12.4705C4.56822 12.4602 4.57013 12.4499 4.57445 12.4405C4.57876 12.4311 4.58534 12.4229 4.5936 12.4166C4.6986 12.3391 4.80359 12.2583 4.90359 12.1775C4.91259 12.1702 4.92344 12.1656 4.93491 12.1641C4.94639 12.1627 4.95805 12.1644 4.96859 12.1692C8.241 13.6391 11.7851 13.6391 15.0191 12.1692C15.0297 12.1641 15.0415 12.1621 15.0531 12.1635C15.0648 12.1648 15.0758 12.1694 15.085 12.1767C15.185 12.2583 15.2891 12.3391 15.395 12.4166C15.4033 12.4227 15.41 12.4308 15.4144 12.4401C15.4189 12.4495 15.421 12.4597 15.4205 12.4701C15.42 12.4804 15.4169 12.4904 15.4116 12.4993C15.4063 12.5081 15.3988 12.5155 15.39 12.5208C14.8916 12.8075 14.3733 13.0499 13.8292 13.2516C13.8208 13.2546 13.8132 13.2594 13.8068 13.2656C13.8005 13.2718 13.7955 13.2793 13.7923 13.2876C13.789 13.2959 13.7876 13.3048 13.7881 13.3136C13.7886 13.3225 13.7909 13.3312 13.795 13.3391C14.095 13.9115 14.4383 14.4565 14.8158 14.974C14.8237 14.9846 14.8346 14.9925 14.8471 14.9967C14.8596 15.0009 14.8732 15.0011 14.8858 14.9973C16.681 14.457 18.372 13.6172 19.8873 12.5133C19.8947 12.5081 19.9009 12.5014 19.9055 12.4937C19.9101 12.4859 19.913 12.4773 19.914 12.4683C20.3306 8.22359 19.2157 4.53549 16.9566 1.26738C16.951 1.25675 16.9419 1.24848 16.9307 1.24404ZM6.68354 10.2318C5.69857 10.2318 4.88609 9.34101 4.88609 8.24858C4.88609 7.15532 5.68274 6.26538 6.68354 6.26538C7.69184 6.26538 8.49682 7.16282 8.48099 8.24858C8.48099 9.34184 7.68435 10.2318 6.68354 10.2318ZM13.3292 10.2318C12.3434 10.2318 11.5317 9.34101 11.5317 8.24858C11.5317 7.15532 12.3275 6.26538 13.3292 6.26538C14.3375 6.26538 15.1425 7.16282 15.1266 8.24858C15.1266 9.34184 14.3383 10.2318 13.3292 10.2318Z" fill="#3C4526"></path></svg>
                <span className='toggle-data'>Discord</span>
            </div>
            
            <div className="toggle-main-data">
            <svg width="18" height="15" class="mr-2" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.982 1.68394C17.3207 1.96851 16.6104 2.16078 15.8635 2.24769C16.6341 1.79992 17.2106 1.09518 17.4855 0.264967C16.7615 0.682576 15.9691 0.976528 15.1429 1.13404C14.5872 0.557887 13.8512 0.176003 13.0492 0.0476779C12.2472 -0.0806469 11.424 0.0517676 10.7073 0.424363C9.99075 0.796959 9.42086 1.38889 9.08616 2.10825C8.75147 2.82762 8.67069 3.63417 8.85637 4.40269C7.38943 4.33116 5.95438 3.96088 4.64433 3.31588C3.33428 2.67089 2.17853 1.76559 1.25207 0.658742C0.935293 1.18942 0.753144 1.80469 0.753144 2.45996C0.752791 3.04985 0.902373 3.6307 1.18862 4.15099C1.47487 4.67127 1.88893 5.1149 2.39406 5.4425C1.80824 5.4244 1.23534 5.27067 0.72305 4.99412V5.04026C0.722991 5.86761 1.01768 6.66949 1.55712 7.30985C2.09655 7.95022 2.84751 8.38961 3.68257 8.55348C3.13912 8.69631 2.56935 8.71735 2.0163 8.61501C2.25191 9.32689 2.71084 9.9494 3.32886 10.3954C3.94687 10.8414 4.69303 11.0885 5.46287 11.1023C4.15602 12.0985 2.54207 12.639 0.880648 12.6366C0.586345 12.6367 0.29229 12.62 0 12.5866C1.68644 13.6396 3.64957 14.1985 5.65452 14.1963C12.4415 14.1963 16.1518 8.73729 16.1518 4.00276C16.1518 3.84894 16.1479 3.69358 16.1407 3.53976C16.8624 3.03291 17.4854 2.40527 17.9804 1.68625L17.982 1.68394Z" fill="#3C4526"></path></svg>
                <span className='toggle-data'>Twitter</span>
            </div>
        </div>

            </div>
            
            <div className="navbar-right-div">
                <span className='navbar-right-div-data'>Play Demo</span>
            </div>
        </div>
      

      <div className="fixed-app-data  d-flex justify-content-between">
        <div className="fixed-data d-flex">
            <img src={youtube} alt="not found" width="70px" height="50px" />
            <span className="fixed-data-value">Watch Teaser</span>
        </div>
        <div className="fixed-data d-flex">
            <span className="fixed-data-value left-data-fixed">Mint NFT MetaHornbills</span>
            <img className='newValue' src={egg} alt="not found" height="90px" />
        </div>
      </div>
        </div>

        {/*------------------------ small scr -------------  */}
        <div className="container">
        <div className="navbar-cont-data-small-scr-data"  >
            <div className="navbar-left-div-main-data">
                <div onClick={()=>setHiddenMenu(!hiddenMenu)}  className="navbar-logo navbar-left-div-main-datas" data-wow-iteration="infinite">
                <svg   className='menu-bar-icon' xmlns="http://www.w3.org/2000/svg" height="31px" viewBox="0 0 24 24" width="31px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg> 
                </div>    
                <span className="navbar-left-div-small">Menu</span>
            </div>

            <div className="navbar-center-div-main-data">
            <img src={img1} alt="not found" width="80px" />

            </div>
            <div className="navbar-right-div-data  black-out-data ">
            <span className="navbar-left-div-small-right">Play Demo</span>
            <div className="navbar-right-div-main-data  ">
            
            <svg className="navbar-right-div-game" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="31px" viewBox="0 0 24 24" width="31px" fill="#fff"><g><rect fill="none" height="31" width="31"/></g><g><g><path d="M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z M19.48,16.81C19.4,16.9,19.27,17,19.06,17c-0.15,0-0.29-0.06-0.39-0.16L15.83,14H8.17 l-2.84,2.84C5.23,16.94,5.09,17,4.94,17c-0.21,0-0.34-0.1-0.42-0.19c-0.08-0.09-0.16-0.23-0.13-0.44l1.09-7.66 C5.63,7.74,6.48,7,7.47,7h9.06c0.99,0,1.84,0.74,1.98,1.72l1.09,7.66C19.63,16.58,19.55,16.72,19.48,16.81z"/><polygon points="9,8 8,8 8,10 6,10 6,11 8,11 8,13 9,13 9,11 11,11 11,10 9,10"/><circle cx="17" cy="12" r="1"/><circle cx="15" cy="9" r="1"/></g></g></svg>
           </div>
            </div>
        </div>
      

      <div className="fixed-app-data  d-flex justify-content-between">
        <div className="fixed-data d-flex">
            <img src={youtube} alt="not found" width="70px" height="50px" />
            <span className="fixed-data-value">Watch Teaser</span>
        </div>
        <div className="fixed-data d-flex">
            <span className="fixed-data-value left-data-fixed">Mint NFT MetaHornbills</span>
            <img className='newValue' src={egg} alt="not found" height="90px" />
        </div>
      </div>
        </div>
      <Home />
        </div>
        <div className="hidden-navbar" style={{display:hiddenMenu?"block ":"none",transition: hiddenMenu?"0.1s linear":"none" }}>
            <div className="hidden-navbar-data">
                 <div className="hidden-navbar-data-div"> 
                <svg onClick={()=>setHiddenMenu(!hiddenMenu)} className='data-icons-val' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"  width="25px" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div> 
                    <div>
                    <p className='cross-icons-data-para'>Menu</p>
                    <p className="hidden-item-data">Home</p>
                    <p className="hidden-item-data">Whitepaper</p>
                    <p className="hidden-item-data">NFTs</p>
                    <p className="hidden-item-data">Community</p>
                    <p className="hidden-item-data">Marketplace</p>
                    </div>
            </div>
        </div>
    </>
  )
}
