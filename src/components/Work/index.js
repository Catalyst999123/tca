import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'

import WorkHero from './hero'
import Campaigns from './campaigns'
import CampaignsGrid from "./campaignsgrid";

const LoadCon = styled.div`
  background: var(--dark-blue);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all .5s linear;

  &.hide {
    left: -100%;
  }
`

function Work() {
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // page transition
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    // if(pageLoad) {
    //   setPageLoad(false)
    // }

    // return function cleanup() {
    //   console.log('cleanup ran');
    //   setPageLoad(true)
    // };
  });
  
  return (
    <>
      <LoadCon className={pageLoad ? 'show' : 'hide'}></LoadCon>
      <div className="load-container">
        <div className="load-screen blue" ref={screen}>
        </div>
      </div>
      <div data-barba="container" className="Home" ref={body} >
        <WorkHero />
        <CampaignsGrid />
      </div>
    </>
  );
}
export default Work;
