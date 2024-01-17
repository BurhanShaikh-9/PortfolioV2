
// import img1 from '../../assets/about1.jpg'
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';
import { useInView } from 'react-intersection-observer';
import Spline from '@splinetool/react-spline';

export const About = () => {
  // const [refLeft, inRefLeftPic] = useInView();
  // const [refRight, inRefRightPic] = useInView();
  // console.log("")

  const [refLeft, inRefLeftPic] = useInView();
  const [refRight, inRefRightPic] = useInView();
  const sceneRef = useRef(null);


  // useEffect(() => {
  //   const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -50000, 10000);
  //   camera.position.set(0, 0, 0);
  //   camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

  //   const scene = new THREE.Scene();

  //   const loader = new SplineLoader();
  //   loader.load(
  //     'https://prod.spline.design/WsusTDxIruuXYOcw/scene.splinecode',
  //     (splineScene) => {
  //       scene.add(splineScene);
  //     }
  //   );
    

  //   const renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setAnimationLoop(animate);

  //   renderer.shadowMap.enabled = true;
  //   renderer.shadowMap.type = THREE.PCFShadowMap;

  //   scene.background = new THREE.Color('#fecbe0');
  //   renderer.setClearAlpha(1);

  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;
  //   controls.dampingFactor = 0.125;

  //   sceneRef.current.appendChild(renderer.domElement);

  //   function onWindowResize() {
  //     camera.left = window.innerWidth / -2;
  //     camera.right = window.innerWidth / 2;
  //     camera.top = window.innerHeight / 2;
  //     camera.bottom = window.innerHeight / -2;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   }

  //   function animate(time) {
  //     controls.update();
  //     renderer.render(scene, camera);
  //   }

  //   window.addEventListener('resize', onWindowResize);

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener('resize', onWindowResize);
  //     renderer.dispose();
  //   };
  // }, []);

  return (
    <React.Fragment >
      <div className="container">
        <div className="aboutInner">
          <div className={`leftSection ${inRefLeftPic ? 'fade-left-in' : 'fade-left-out'}`} style={{ transitionDelay: '0.3s' }} ref={refLeft}>
            {/* <img src={img1} alt="" /> */}
            {/* <div ref={sceneRef}></div> */}
            <Spline className='splineObj0' scene="https://prod.spline.design/zJ0Ri1GCp4L2Owcq/scene.splinecode" />
          </div>
          <div className="rightSection">
            <div className={`rightInner ${inRefRightPic ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '0.1s' }} ref={refRight}>
              <h1> <span> &lt;</span>h1<span>&gt;</span> ABOUT <span>&lt;</span>/h1<span>&gt;</span> </h1>
              <p>
                I am a Software Engineer, who keeps looking for the opportunity to get better, to learn and to improve my skills.
              </p>
              {/* <div className='leftBracket'>&#91;</div>
              <div className='rightBracket'>&#93;</div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
