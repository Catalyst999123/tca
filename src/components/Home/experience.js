import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

import HomeBrand from '../../images/homebrand.png'
import { Reveal, Tween } from "react-gsap";

const ExperienceCon = styled.div`
  color: var(--dark-green);
  padding: 80px 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    line-height: 29px;
  }

  img {
    width: 200px;
    height: 200px;
  }

  ${media.laptop`
    padding: var(--gutter-space);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      margin-right: 100px;
    }

    p {
      font-size: 30px;
    line-height: 40px;
    }
  `}
`

function Experience() {

  return (
    <ExperienceCon>
      <img src={HomeBrand} alt="brandmark" />
      <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
      <p>We tap into our vast industry and channel experience, finding new, inventive solutions to every challenge. Our strength comes from building solid relationships with our customers.</p>
      </Tween></Reveal>
    </ExperienceCon>
  );
}
export default Experience;