import React from "react";
import styled from 'styled-components'
import media from "../styles/media";
import { useLocation } from 'react-router-dom'

const BackgroundCon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition:all 0.3s linear;
  z-index:-1;
  height: calc(var(--vh, 1vh) * 80);
  width: 100vw;

  &.transparent {
    background-color: transparent;
  }
  &.red {
    background-color: var(--dark-red);
    height: 700px;
  }
  &.blue {
    background-color: var(--light-blue);
  }
  &.blueWork {
    background-color: var(--light-blue);
    height: 600px;
  }
  &.blueInsight {
    background-color: var(--light-blue);
    height: 600px;
  }
  &.darkblue {
    background-color: var(--dark-blue);
    height: 650px;
  }
  &.green {
    background-color: var(--light-green);
  }
  &.darkGreen {
    height: 85vh;
    min-height: 700px;
    background-color: var(--light-blue);
  }
  &.yellow {
    background-color: var(--light-yellow);
    height: 650px;
  }

  ${media.laptop`
    min-height: 700px;
    height: 100vh;
    &.yellow {
      min-height: 600px;
      height: 70vh;
    }
    &.blue {
      min-height: 600px;
      height: 90vh;
    }
    &.blueWork {
      min-height: 500px;
      height: 50vh;
    }
    &.blueInsight {
      min-height: 500px;
      height: 45vh;
    }
    &.darkblue {
      min-height: 550px;
      height: 50vh;
    }
    &.red {
      min-height: 600px;
      height: 70vh;
    }

    /* &.yellow {
      height: 100vh;
    } */

    .darkGreen {

      height: 100vh;
      min-height: 800px;
    }
  `}
`

function Background() {
  const location = useLocation();
  let bgColor = 'transparent'

  if (location.pathname.replace("/", "") === 'about') {
    bgColor = 'red'
  } else if (location.pathname.replace("/", "") === 'services') {
    bgColor = 'green'
  } else if (location.pathname.includes('blog') && location.pathname.length < 6) {
    bgColor = 'blueInsight'
  } else if (location.pathname.includes('blog') && location.pathname.length > 6) {
    bgColor = 'blueWork'
  } else if (location.pathname.includes('work') && location.pathname.length < 6) {
    bgColor = 'blueWork'
  } else if (location.pathname.includes('work') && location.pathname.length > 6) {
    bgColor = 'blueWork'
  } else if (location.pathname.replace("/", "") === 'contact') {
    bgColor = 'darkblue'
  } else if (location.pathname.includes("privacy")) {
    bgColor = 'darkGreen'
  } else {
    bgColor = 'transparent'
  }

  return (
    <BackgroundCon className={bgColor} />
  );
}

export default Background;
