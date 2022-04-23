import React, { useEffect, useRef } from "react";

import ServicesHero from './hero'
import Gallery from './gallery'
import Award from './award'
import Gallery2 from './gallery2'
import ServiceList from './services'
import Text from './text'
import Partners from './partners'

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // page transition
  let screen = useRef(null);
  let body = useRef(null);

  // useEffect(() => {
  //   var tl = new TimelineMax();
  //   tl.to(screen.current, {
  //     duration: 1.2,
  //     width: "100%",
  //     left: "0%",
  //     ease: Power3.easeInOut,
  //   });
  //   tl.to(screen.current, {
  //     duration: 1,
  //     left: "100%",
  //     ease: Power3.easeInOut,
  //     delay: 0.3,
  //   });
  //   tl.set(screen.current, { left: "-100%" });
  //   TweenMax.to(body.current, .3, {css: {
  //     opacity: "1",
  //     pointerEvents: "auto",
  //     ease: Power4.easeInOut
  //   }}).delay(2);
  //   return () => {
  //     TweenMax.to(body.current, 1, {css: {
  //       opacity: "0",
  //       pointerEvents: 'none'
  //     }});
  //   }
  // });
  
  return (
    <>
      <div className="load-container green">
        <div className="load-screen green" ref={screen}>
        </div>
      </div>
      <div data-barba="container" className="Home" ref={body}>
        <ServicesHero />
        <Gallery />
        <Award />
        <ServiceList />
        <Text />
        <Partners />
        <Gallery2 />
      </div>
    </>
  );
}
export default Services;
