import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

import BrandMark from '../../images/yellowbrandmark.svg'

const WorkHeroCon = styled.div`

height: 400px;
    padding-top: 20vh;
    padding-left: 10px;
    padding-right: 35px;
  /* height: 650px; */
  display: flex;
  flex-direction: column;
 
  h2.header {
    color: #1A1A9E;
    font-weight: normal;
    margin: 0;
    font-size: 48px;
    line-height: 1;
    opacity: 0.8;
  }

  h3.hero-text {
      font-size: 25px;
      color: white;
    }

    p{
      font-size: 20px;
    }

  .hero-container {
    /* padding: 2vw 5vh; */
  }


  ${media.laptop`
    min-height: 600px;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 10vw;

    p{
      font-size: 25px;
    }

    h3.hero-text {
      font-size: 40px;
          color: white;
    }

    div.hero-container{
      width: 500px;
    }

    h2.header {
    color: #1A1A9E;
    font-weight: normal;
    margin: 0;
    font-size: 90px;
    line-height: 1;
    opacity: 0.8;
  }

  `}
`

function WorkHero() {


  return (
    <WorkHeroCon>
      <div>
        <h2 className="header">
          Work
        </h2>
      </div>

      <div className="hero-container">
        <h3 className="hero-text">
          Instigators of new ideas<br />
          and never stop refining what<br />
          and how we’re doing it.
        </h3>
        <p style={{ color: '#F2F2F2' }}>Since 2008 Catalyst Africa has been the choice of many B2B businesses around Africa.</p>
      </div>

    </WorkHeroCon>
  );
}
export default WorkHero;