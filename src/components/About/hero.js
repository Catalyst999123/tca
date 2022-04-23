import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

const AboutHeroCon = styled.div`
  /* height: 650px; */
  width: 84vw;
  padding: 0 5vw;
  height: 700px;
  display: flex;
  align-items: center;
  margin: 0;
  h2 {
    color: var(--light-red);
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
    text-align: center;
    width: calc(100vw - 16vw);
    color: var(--light-red);
    font-size: 40px;
    line-height: 44px;

    &.desk {
      display: none;
    }
  }

  ${media.laptop`
    /* height: 95vh; */
    padding: 0 8vw 0;
    flex-direction: column;
    min-height: 600px;
    height: 80vh;
    justify-content: center;

    h2 {
      color: var(--light-red);
      font-weight: normal;
      font-size: 76px;
      line-height: 76px;

      &.mob {
        display: none;
      }
      &.desk {
        display: block;
      }
      .line-wrap {
        overflow: hidden;
        height: 76px;
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

function AboutHero() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  // let line5 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2, line3, line4], 0.8, {
      delay: 3,
      ease: "power3.out",
      y: 76,
      stagger: {
        amount: 0.15
      }
    });
  }, [line1, line2, line3, line4]);

  // useEffect(() => {
  //   gsap.from([line2, line3, line4, line5], 0.8, {
  //     delay: 0.8,
  //     ease: "power3.out",
  //     y: 44,
  //     stagger: {
  //       amount: 0.15
  //     }
  //   });
  // }, [line2, line3, line4, line5]);

  return (
    <AboutHeroCon>
      <>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line1 = el)} className='line'>
          We care about our  
        </div>
        </div>
      </h2>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line2 = el)} className='line'>
        people, our customers,
        </div>
        </div>
      </h2>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line3 = el)} className='line'>
          our processes and the
        </div>
        </div>
      </h2>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line4 = el)} className='line'>
          impact that we make.
        </div>
        </div>
      </h2>
      {/* <p className="blurbText desk">
        <div className='line-wrap'>
        <div ref={el => (line2 = el)} className='line'>
          We care about our  
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line3 = el)} className='line'>
          people, our customers,
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line4 = el)} className='line'>
          our processes and the
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line5 = el)} className='line'>
          impact that we make.
        </div>
      </div>
      </p> */}
      <p className="blurbText mob">
        We care about our people, our customers, our processes and the impact that we make.
      </p>
      </>
    </AboutHeroCon>
  );
}
export default AboutHero;