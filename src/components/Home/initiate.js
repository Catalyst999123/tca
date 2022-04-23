import React, { useState, useEffect } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'
import { Reveal, Tween } from "react-gsap";
import { useInView } from 'react-hook-inview'

const InitiateCon = styled.div`
  color: var(--dark-green);
  padding: 30px 5vw 80px;

  p {
    font-size: 24px;
    line-height: 29px;

    &.left {
      font-size: 30px;
line-height: 41px;
    }
  }

    .menu__link {
      display: inline-block;
      text-decoration: none;
      position: relative;
      margin: 0 30px;
    }

    .menu__link {

      overflow: visible;
      svg {
        fill: none;
        stroke: var(--light-green);
        stroke-width: 1;
        stroke-miterlimit: 10;
        stroke-dasharray: 338;
        stroke-dashoffset: 338;
        stroke-linecap: round;
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 40px);
        height: fit-content;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(-5deg);
        transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
        z-index: 1;
        overflow: visible;
        stroke-dashoffset: 0;
        opacity: 1;
        transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

  ${media.laptop`
    padding: var(--gutter-space-small);
    display: flex;
    align-items: center;

    p {
      font-size: 25px;
      line-height: 35px;

      &.left {
        font-size: 48px;
        line-height: 1.25;
        width: 50vw;
        margin-right: 25px;
      }
      &.right {
        margin-left: 25px;
        width: 50vw;
      }
    }

    .menu__link {
      display: inline-block;
      text-decoration: none;
      position: relative;
      margin: 0 30px;
    }

    .menu__link {

      overflow: visible;
      svg {
        fill: none;
        stroke: var(--light-green);
        stroke-width: 1;
        stroke-miterlimit: 10;
        stroke-dasharray: 338;
        stroke-dashoffset: 338;
        stroke-linecap: round;
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 40px);
        height: fit-content;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(-5deg);
        transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
        z-index: 1;
        overflow: visible;
      }
    }

    .menu__link svg.shown {
      stroke-dashoffset: 0;
      opacity: 1;
      transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    }
  `}
`

function Initiate() {
  const [shown, setShown] = useState(false)

  const [ref, isVisible] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if(isVisible) {
      setTimeout(() => {
        setShown(true)
      }, 1000);
    }
  }, [isVisible])

  return (
    <InitiateCon>
    <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
      <p className="left">We are the 
      <span className="menu__link">
        initiators
        <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg" ref={ref} className={shown ? 'shown' : ''}>
          <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z"/>
        </svg>
      </span>
       <br/> of strong, impactful relationships</p> 
    </Tween></Reveal>

    <Reveal><Tween from={{ opacity: '0' }} duration={.5} delay={.5}>
      <p className="right">Being solutionists at heart, we deliver results that spark and solidify new connections. Delivering work that matters, with purpose between businesses and their customers.</p>
    </Tween></Reveal>
    </InitiateCon>
  );
}
export default Initiate;