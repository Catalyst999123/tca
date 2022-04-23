import React, { useRef, useEffect } from "react"
import styled from 'styled-components'
import media from "../../styles/media";
import { gsap } from "gsap";

const WorkHeroCon = styled.div`
  height: 500px;
  width: 100vw;
  h2 {
    color: var(--dark-blue);
    position: absolute;
    top: 280px;
    left: 20px;
    margin-bottom: 0;
    font-weight: normal;

    &.desk {
      display: none;
    }
  }
  .text {
    color: white;
    width: 275px;
    position: absolute;
    left: 20px;
    top: 100px;
    &.desk {
      display: none;
    }
    .small {
      font-size: 18px;
      line-height: 22px
    }
  }

  ${media.laptop`
    height: 95vh;

    h2 {
      color: var(--dark-blue);
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

    .text {
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
        height: 47px;
      }

      .small {
        font-size: 28px;
        line-height: 34px;
        width: 400px;
        .line-wrap {
          overflow: hidden;
          height: 30px;
        }
      }
    }
  `}
`

function WorkHero() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let line6 = useRef(null);
  let line7 = useRef(null);
  let line8 = useRef(null);

  useEffect(() => {
    gsap.from([line2, line3, line4, line5, line6, line7, line8], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 43,
      stagger: {
        amount: 0.15
      }
    });
  }, [line2, line3, line4, line5, line6, line7, line8])

  useEffect(() => {
    gsap.from([line1], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 148,
      stagger: {
        amount: 0.15
      }
    });
  }, [])

  return (
    <WorkHeroCon>
      <h2 className="largeText desk">
        <div className='line-wrap'>
          <div ref={el => (line1 = el)} className='line'>
          Work
          </div>
        </div>
      </h2>
      <h2 className="largeText mob">
          Work
      </h2>
      <div className="text desk">
        <p className="blurbText large">
        <div className='line-wrap'>
          <div ref={el => (line2 = el)} className='line'>
            Instigators of new ideas
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line3 = el)} className='line'>
            and never stop refining
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line4 = el)} className='line'>
            what and how we're
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line5 = el)} className='line'>
            doing it.
          </div>
        </div>
        </p>
        <p className="small">
        <div className='line-wrap'>
          <div ref={el => (line6 = el)} className='line'>
            Since 2008 Catalyst Africa has
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line7 = el)} className='line'>
            been the choice of many B2B
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line8 = el)} className='line'>
          businesses around Africa.
          </div>
        </div>
        </p>
      </div>
      <div className="text mob">
        <p className="blurbText large">
          Instigators of new ideas and never stop refining what and how we're doing it.
        </p>
        <p className="small">
          Since 2008 Catalyst Africa has been the choice of many B2B businesses around Africa.
        </p>
      </div>
    </WorkHeroCon>
  );
}
export default WorkHero;
