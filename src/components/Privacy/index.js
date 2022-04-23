import React, { useEffect, useRef } from "react";

import PrivacyHero from "./hero";
import Info from "./info";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // page transition
  let screen = useRef(null);
  let body = useRef(null);

  return (
    <>
      <div className="load-container">
        <div className="load-screen lightgreen" ref={screen}>
        </div>
      </div>
      <div data-barba="container" className="Home" ref={body}>
        <PrivacyHero />
        <Info />
      </div>
    </>
  );
}
export default Privacy;