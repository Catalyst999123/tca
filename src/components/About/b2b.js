import React from "react"
import { Reveal, Tween } from "react-gsap";
import styled from 'styled-components'
import media from '../../styles/media'

const B2BCon = styled.div`
  height: auto;
  margin: 0 5vw ;
  display: block;
  /* padding: 0 14vw 0 12vw; */
  h2 {
    font-weight: normal;
    color: var(--dark-red);
    margin: 40px 0;
  }
  p {
    font-size: 20px;
    line-height: 24px;
    color: var(--dark-red);
  }

  ${media.laptop`
    margin: 150px 0 0px;
    padding: 0 16vw;
    h2 {
      font-weight: normal;
      color: var(--dark-red);
      margin: 50px 80px 0 0;
    }

    p {
      font-size: 25px;
      line-height: 35px;
    }
  `}
`

function B2B() {
  return (
    <B2BCon>
      {/* <h2 className="headingText">
        We are Africa's B2B marketing agency of choice.
      </h2> */}
      <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
        <p className="bodyText">
          The Catalyst Africa is the B2B marketing agency of choice, known for our impactful results and solutionist thinking. A multi-award-winning agency working with a diverse customer set, across both B2B and B2C. We want to increase our African presence, spreading our footprint by collaborating and building partnerships across the continent.
        </p></Tween></Reveal>
      <Reveal><Tween from={{ opacity: '0' }} duration={.5} delay={.5}>
        <p className="bodyText">
          Operating for more than 18 years as a full service agency, our clients – corporate, small to medium businesses – trust us with marketing initiatives that accelerate demand for their products and solutions. We understand our customers and their customers. Acting as an extension of their team, available for full support.
        </p></Tween></Reveal>
    </B2BCon>
  );
}
export default B2B;
