import React from 'react'
import fmd from "../../assets/projects/headerLogo.png"
import arrayShare from "../../assets/projects/logoHeaderBlack.png"
import resourcePad from "../../assets/projects/logo.png"
import walaa from "../../assets/projects/walaLogo2.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Project = () => {
  

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
              <Carousel
               showArrows={true}
               infiniteLoop={true}
               autoPlay={false}
               interval={100}
               showThumbs={false}
               showStatus={false}
               swipeable={true}
               emulateTouch={true}
               dynamicHeight={false}
               centerMode={false}
               centerSlidePercentage={100}
               selectedItem={0}
               axis="horizontal"
               // Adjust the number of items shown here
               // For example, to show 3 items at a time
               // and 2 items on smaller screens, you can use:
               // slidesToShow={3}
               // responsive={[
               //   {
               //     breakpoint: 768,
               //     settings: {
               //       slidesToShow: 2,
               //     },
               //   },
               // ]}
               slidesToShow={3} // Show 3 items at a time
               responsive={[
                 {
                   breakpoint: 768, // Breakpoint for smaller screens
                   settings: {
                     slidesToShow: 2, // Show 2 items at a time
                   },
                 },
                 {
                   breakpoint: 480, // Breakpoint for mobile devices
                   settings: {
                     slidesToShow: 1, // Show 1 item at a time
                   },
                 },
               ]}
              >
                <div className="worksInner">
                  <img src={fmd} alt="" />
                  <div className="blackwindow">
                    <h2>Find My Doctor</h2>
                    <p>App to book doctor and lab can even buy Pharmacy and Insurance</p>
                    <p>UI/UX and Api integration</p>
                  </div>
                </div>
                <div className="worksInner">
                  <img src={arrayShare} alt="" />
                  <div className="blackwindow">
                    <h2>Array Share</h2>
                    <p>An application to share file across localhost</p>
                    <p>UI/UX and designing</p>
                  </div>
                </div>
                <div className="worksInner">
                  <img src={resourcePad} alt="" />
                  <div className="blackwindow">
                    <h2>ResourcePad</h2>
                    <p>A canadian company Portfolio</p>
                    <p>UI/UX and designing</p>
                  </div>
                </div>
                <div className="worksInner">
                  <img src={walaa} alt="" />
                  <div className="blackwindow">
                    <h2>Walaa</h2>
                    <p>An omani coupon application</p>
                    <p>UI/UX and designing</p>
                  </div>
                </div>
              
              </Carousel>
            </div>

          </div>
        </div>
      </div>

    </React.Fragment>
  )
}
