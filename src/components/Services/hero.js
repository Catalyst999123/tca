import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

const ServicesHeroCon = styled.div`
  height: 650px;
  width: 100vw;
  h2 {
    color: var(--dark-green);
    position: absolute;
    top: 250px;
    left: 20px;
    margin-bottom: 0;
    font-weight: normal;

    &.desk {
      display: none;
    }
  }
  p {
    color: white;
    width: 275px;
    position: absolute;
    left: 20px;
    top: 100px;

    &.desk {
      display: none;
    }
  }

  ${media.laptop`
    height: 95vh;

    h2 {
      color: var(--dark-green);
      position: absolute;
      top: 45vh;
      left: 40px;
      margin-bottom: 0;
      font-weight: normal;
      &.mob {
        display: none;
      }
      &.desk {
        display: block;
      }
      .line-wrap {
        overflow: hidden;
        height: 150px;
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
  `}
`

function ServicesHero() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let line6 = useRef(null);

  useEffect(() => {
    gsap.from([line2, line3, line4, line5, line6], 0.8, {
      delay: 3,
      ease: "power3.out",
      y: 43,
      stagger: {
        amount: 0.15
      }
    });
  }, [line2, line3, line4, line5, line6]);

  useEffect(() => {
    gsap.from([line1], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 148,
      stagger: {
        amount: 0.15
      }
    });
  }, [line1]);

  return (
    <ServicesHeroCon>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line1 = el)} className='line'>
        Services
        </div>
        </div>
      </h2>
      <h2 className="largeText mob">Services</h2>
      <p className="blurbText desk">
        <div className='line-wrap'>
        <div ref={el => (line2 = el)} className='line'>
          Catalyst Africa is the  
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line3 = el)} className='line'>
          marketing agency for 
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line4 = el)} className='line'>
          B2B brands looking to
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line5 = el)} className='line'>
          accelerate their path to
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line6 = el)} className='line'>
          success
        </div>
      </div>
      </p>
      <p className="blurbText mob">Catalyst Africa is the marketing agency for B2B brands looking to accelerate their path to success</p>
    </ServicesHeroCon>
  );
}
export default ServicesHero;