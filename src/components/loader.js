import React from "react";
import styled, { keyframes } from 'styled-components'
import media from "../styles/media";
import TextLoop from "react-text-loop"

const TextHide = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const PreloaderMove = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const PreloaderMoveMob = keyframes`
  0% {
    top: 0vh;
  }
  100% {
    top: -100vh;
  }
`

const LoaderCon = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background: var(--dark-green);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  animation: ${PreloaderMoveMob} 2s ease-in-out forwards;
  animation-delay: 7s;

  display: flex;
  align-items: center;

  p {
    padding: 0 5vw;
    color: var(--light-green);
    font-size: 72px;
    line-height: 86px;
  }

  &.disable {
    transition: 700ms ease-out;
    opacity: 0;
    z-index: -3;
    p {
      opacity: 0;
    }
  }

  ${media.laptop`
    animation: ${PreloaderMove} 2s ease-in-out forwards;
    animation-delay: 9s;

    .loopOuter {
      height: 300px;
      display: flex;
      align-items: center;
      overflow: hidden;
      animation: ${TextHide} 1s linear forwards;
      animation-delay: 8s;
    }

    p {
      padding:0 16vw;
      font-size: 180px;
      line-height: 216px;
      letter-spacing: -0.08em;
    }
  `}
`

function Loader(props) {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <LoaderCon className={props.loaded ? "disable" : null}>
      <div className="loopOuter">
      <TextLoop interval="1700" className="scroller">
        <p>Hello.</p>
        <p>Sawubona.</p>
        <p>Sannu.</p>
        <p>Bonjour.</p>
        <p>Hujambo.</p>
      </TextLoop>
      </div>
    </LoaderCon>
  );
}

export default Loader;