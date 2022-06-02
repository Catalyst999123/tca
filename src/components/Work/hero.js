import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

import BrandMark from '../../images/yellowbrandmark.svg'

const WorkHeroCon = styled.div`
  height: 650px;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  flex-direction: row;
 
  h2 {
    color: #1A1A9E;
    font-weight: normal;
    margin: 0;
    font-size: 90px;
    line-height: 1;
    opacity: 0.8;
  }


  ${media.laptop`
    min-height: 600px;
    height: 70vh;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 10vw;
  `}
`

function WorkHero() {


  return (
    <WorkHeroCon>
      <div>
        <h2 className="">
          Work
        </h2>
      </div>

      <div style={{ width: 550 }}>
        <h3 style={{
          fontSize: 40,
          color: 'white'
        }} className="">
          Instigators of new ideas<br />
          and never stop refining what<br />
          and how we’re doing it.
        </h3>
        <p style={{ color: '#F2F2F2', fontSize: 24 }}>Since 2008 Catalyst Africa has been the choice<br /> of many B2B businesses around Africa.</p>
      </div>

    </WorkHeroCon>
  );
}
export default WorkHero;