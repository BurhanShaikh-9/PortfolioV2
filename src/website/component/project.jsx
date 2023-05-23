import React from 'react'
import fmd from "../../assets/projects/headerLogo.png"
import arrayShare from "../../assets/projects/logoHeaderBlack.png"
import resourcePad from "../../assets/projects/logo.png"
import walaa from "../../assets/projects/walaLogo2.png"
import indusLogo from "../../assets/projects/IndusHospitalLogo.png"
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Project = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, // Show 2 slides on medium-sized screens
        },
      },
      {
        breakpoint: 850, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };

  return (
    <React.Fragment >
      <div className="container">
        <div className="projectInner">
          <div className="heading">
            <h1>
              Projects
            </h1>
          </div>
          <div className="works">

            <div className="wrapper">
              <Slider className='reactSlickCarousel' {...settings}>
                <div className='item'>
                  <a className="worksInner" draggable="false" href='https://find-my-doctor-v2.vercel.app/'>
                    <img src={fmd} alt="" />
                    <div className="blackwindow">
                      <h2>Find My Doctor</h2>
                      <p>App to book doctor and lab can even buy Pharmacy and Insurance</p>
                      <p>UI/UX and Api integration</p>
                    </div>
                  </a>
                </div>
                
                <div className='item'>
                  <a className="worksInner" draggable="false" href='https://indushospital.org.uk/dev/'>
                    <img src={indusLogo} alt="" />
                    <div className="blackwindow">
                      <h2>Indus Hospital</h2>
                      <p>An online donation app for hospital</p>
                      <p>UI/UX and designing</p>
                    </div>
                  </a>
                </div>
                
                <div className='item'>
                  <a className="worksInner" draggable="false" href='https://arrayshare.netlify.app/'>
                    <img src={arrayShare} alt="" />
                    <div className="blackwindow">
                      <h2>Array Share</h2>
                      <p>An application to share file across localhost</p>
                      <p>UI/UX and designing</p>
                    </div>
                  </a>
                </div>
                
                <div className='item'>
                  <a className="worksInner" draggable="false" href='https://www.resourcepad.ca/'>
                    <img src={resourcePad} alt="" />
                    <div className="blackwindow">
                      <h2>ResourcePad</h2>
                      <p>A canadian company Portfolio</p>
                      <p>UI/UX and designing</p>
                    </div>
                  </a>
                </div>
                
                <div className='item'>
                  <a className="worksInner" draggable="false" href='https://vercel.com/nyx-95/walaa-partner'>
                    <img src={walaa} alt="" />
                    <div className="blackwindow">
                      <h2>Walaa</h2>
                      <p>An omani coupon application</p>
                      <p>UI/UX and designing</p>
                    </div>
                  </a>
                </div>

              </Slider>
            </div>

          </div>
        </div>
      </div>

    </React.Fragment>
  )
}
