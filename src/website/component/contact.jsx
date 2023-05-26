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
                    <a href="mailto:shaikhburhanali29@gmail.com" target='_blank' className=' menu gmail'>Open Gmail Inbox</a>
                    <a href="https://www.instagram.com/nyx9_dev/" target='_blank' className=' menu instagram'>
                        Instagram
                    </a>
                    <a href="https://github.com/BurhanShaikh-9" target='_blank' className=' menu github'>
                        Git Hub
                    </a>
                    <a href='https://www.linkedin.com/in/burhan-shaikh-dev/' className=' menu linkedIn' target='_blank'>
                        Linked In
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}
