import React, { useEffect, useRef } from "react"
import { Reveal, Tween } from 'react-gsap'
import styled from 'styled-components'
import media from '../../styles/media'

import SolutionImg from '../../images/home/solutionists.jpg'

const SolutionistsCon = styled.div`
  display: flex;
  flex-direction: column-reverse;

  p {
    font-size: 30px;
    line-height: 30px;
    /* text-align: center; */
  }

  .first {
    background: var(--dark-blue);
    color: var(--light-blue);
    font-size: 2.5vw;
    display: flex;
    align-items: center;
    padding: 100px 5vw;
  }
  
  .second {
    height: 380px;
  }

  img {
    max-width: 100vw;
    height: 100%;
    object-fit: cover;
  }


  ${media.laptop`
    /* height: 450px; */
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    p {
      font-size: 40px;
      line-height: 48px;
      text-align: left;
    }

    .first {
      padding: 50px 8vw;
    }

    .second {
      height: 100%;
    }

    img {
      max-width: 40vw;
      height: 100%;
      object-fit: cover;
    }
  `}
`

function Solutionists() {

  return (
    <SolutionistsCon>
      <div className="first">
      <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
      <p>Being solutionists at heart, we deliver results that spark and solidify new connections. </p>
      </Tween></Reveal>
      </div>
      <div className="second">
        <img src={SolutionImg} alt="solutionists" />
      </div>
    </SolutionistsCon>
  );
}
export default Solutionists;