import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

const BlogHeroCon = styled.div`
  /* height: 650px; */
  width: 90vw;
  padding: 250px 5vw 0;
  height: 500px;
  h2 {
    color: var(--dark-blue);
    font-weight: normal;
    margin: 0;
    font-size: 8vw;
    line-height: 1;
    text-align: left;
    width: calc(100vw - 10vw);

    &.desk {
      display: none;
    }
  }
  p {
    color: var(--dark-blue);
    font-size: 64px;
    line-height: 44px;

    &.desk {
      display: none;
    }
  }

  ${media.laptop`
    /* height: 95vh; */
    display: flex;
    align-items: center;
    padding: var(--gutter);
    min-height: 500px;
    height: 45vh;
    
    h2 {
      color: var(--dark-blue);
      font-weight: normal;
      font-size: 95px;
      line-height: 100px;
      &.mob {
        display: none;
      }
      &.desk {
        display: block;
      }
      .line-wrap {
        overflow: hidden;
        height: 100px;
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

function BlogHero() {
  let line1 = useRef(null);
  // let line2 = useRef(null);
  // let line3 = useRef(null);
  // let line4 = useRef(null);
  // let line5 = useRef(null);

  useEffect(() => {
    gsap.from([line1], 0.8, {
      delay: 3,
      ease: "power3.out",
      y: 95,
      stagger: {
        amount: 0.15
      }
    });
  }, [line1]);

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
    <BlogHeroCon>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line1 = el)} className='line'>
          Our Insights
        </div>
        </div>
      </h2>
      {/* <h2 className="largeText mob">
          About
      </h2> */}
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
        Our Insights
      </p>
    </BlogHeroCon>
  );
}
export default BlogHero;