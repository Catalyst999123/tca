import React, { useEffect, useRef } from "react";

import AboutHero from './hero'
import Gallery from './gallery'
import Gallery2 from './gallery2'
import B2B from './b2b'
import Values from './values'
import Text from './text'
import Process from './process'
import Gallery3 from "./gallery3";
import Experience from "./experience";
import Services from "./services";
import Team from "./team";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // page transition
  let screen = useRef(null);
  let body = useRef(null);

  return (
    <>
      <div className="load-container">
        <div className="load-screen red" ref={screen}>
        </div>
      </div>
      <div data-barba="container" className="Home" ref={body}>
        <AboutHero />
        <Gallery />
        <B2B />
        <Gallery3 />
        <Experience />
        <Values />
         <Services />
        <Team />
      </div>
    </>
  );
}
export default About;