import React, { useEffect } from 'react'
import img1 from '../../assets/about1.jpg'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const About = () => {

  return (
    <React.Fragment >
      <div className="container">
        <div className="aboutInner">
          <div className="leftSection">
            <img src={img1} alt="" />
          </div>
          <div className="rightSection">
            <div className="rightInner">
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio sint voluptatem obcaecati quis quo voluptates amet incidunt facilis alias, voluptatibus architecto. Velit consequatur ratione porro minus quos rem reiciendis?</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
