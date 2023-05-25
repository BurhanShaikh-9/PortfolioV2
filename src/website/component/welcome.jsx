import React, { useEffect } from 'react'
import picture from '../../assets/burhan.png'
import Ba from '../../assets/ba.png'
import ha from '../../assets/ha.png'
import noon from '../../assets/noon.png'
import { useInView } from 'react-intersection-observer';

export const Welcome = () => {
  const [refNoon, inViewNoon] = useInView();

  const [refHa, inViewHa] = useInView();

  const [refBa, inViewBa] = useInView();
 
  return (
    <React.Fragment >
      <div className="container">
        <div className="welcomeInner">
        <div className="inner">
            <img className={`no ${inViewNoon ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '1.5s' }} id="baId" src={noon} alt="" ref={refNoon} />
            <img className={`ha ${inViewHa ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '1s' }} id="haId" src={ha} alt="" ref={refHa} />
            <img  className={`ba ${inViewBa ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '0.5s' }}  id="naId" src={Ba} alt="" ref={refBa} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
