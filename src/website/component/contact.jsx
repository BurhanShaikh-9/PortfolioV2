import React, { useEffect } from 'react'
import img1 from '../../assets/about1.jpg'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useInView } from 'react-intersection-observer';

export const Contact = () => {
    const [refLeft, inRefLeftPic] = useInView();
    const [refRight, inRefRightPic] = useInView();
    return (
        <React.Fragment >
            <div className="container">
                <div className="contactInner">
                    <a href="" className=' menu instagram'>
                        Instagram
                    </a>
                    <a href="#" className=' menu github'>
                        GitHub
                    </a>
                    <a href='#' className=' menu linkedIn'>
                        Linked IN
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}
