import React, { useRef, useState } from "react"
import styled from 'styled-components'

import media from "../../styles/media"
import Blogs from "./blog";
import Campaigns from "./campaigns";
import Experience from "./experience";
import HomeHero from "./hero";
import Initiate from "./initiate";
import Solutionists from "./solutionists";

const HomeCon = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
  outline: none;
  width: 100vw;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;

  ${media.laptop`
    

  `}
`

function Home() {
  return (
    <>
    <HomeHero />
    <Solutionists />
    <Experience />
    <Campaigns />
    <Initiate />
    <Blogs />
    </>
  );
}

export default Home;