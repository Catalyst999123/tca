import React, { useEffect, useRef } from "react";
import { Reveal, Tween } from "react-gsap";
import Footer from "../footer";
import Blogs from "./blog";

import BlogHero from './hero'
import PressReleases from "./pressReleases";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // page transition
  let screen = useRef(null);
  let body = useRef(null);
  
  return (
    <>
    <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
      <div className="load-container">
        <div className="load-screen red" ref={screen}>
        </div>
      </div>
      <div data-barba="container" className="Home" ref={body}>
        <BlogHero />
        <Blogs />
      </div>
      </Tween>
      </Reveal>
    </>
  );
}
export default Blog;
