import React, { useEffect, useRef } from "react";

import ContactHero from './hero'
import Gallery from './gallery'
import Details from './details'
import Forms from "./forms";

function Contact() {
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
  //     duration: 1,s
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
      <div className="load-container">
        <div className="load-screen yellow" ref={screen}>
        </div>
      </div>
      <div data-barba="container" className="Home" ref={body}>
        <ContactHero />
        {/* <Gallery /> */}
        <Details />
        <Forms />
      </div>
    </>
  );
}
export default Contact;