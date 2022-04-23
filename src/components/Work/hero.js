import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

import BrandMark from '../../images/yellowbrandmark.svg'

const WorkHeroCon = styled.div`
  height: 650px;
  width: 90vw;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  /* height: fit-content; */
  h2 {
    color: var(--light-yellow);
    font-weight: normal;
    margin: 0;
    font-size: 8vw;
    line-height: 1;
    text-align: center;
    width: calc(100vw - 16vw);

    &.desk {
      display: none;
    }
  }
  p {
    color: var(--dark-yellow);
    font-size: 62px;
    line-height: 74px;

    &.desk {
      display: none;
    }
  }

  .brandmark {
    height: 250px;
    position: absolute;
    top: 525px;
    right: 0;
  }

  ${media.laptop`
    min-height: 600px;
    height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 6vw;

    h2 {
      color: var(--dark-yellow);
      font-weight: normal;
      font-size: 95px;
      line-height: 80px;
      &.mob {
        display: none;
      }
      &.desk {
        display: block;
      }
      .line-wrap {
        overflow: hidden;
        height: 95px;
      }
    }

    p {
      color: white;
      width: 465px;
      position: absolute;
      left: 60vw;
      top: 20vh;
      &.mob {
        display: none;
      }
      &.desk {
        display: block;
      }
      .line-wrap {
        overflow: hidden;
        height: 45px;
      }
    }

    .brandmark {
      height: 350px;
      position: absolute;
      top: 50vh;
      right: 0;
    }
  `}
`

function WorkHero() {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 3,
      ease: "power3.out",
      y: 95,
      stagger: {
        amount: 0.15
      }
    });
  }, [line1, line2]);

  return (
    <WorkHeroCon>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line1 = el)} className='line'>
        Marketing initiatives that 
        </div>
        </div>
      </h2>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line2 = el)} className='line'>
        deliver an impact
        </div>
        </div>
      </h2>
      <p className="blurbText mob">
        Marketing initiatives that deliver an impact
      </p>

      <img src={BrandMark} className="brandmark" alt="TCA" />
    </WorkHeroCon>
  );
}
export default WorkHero;