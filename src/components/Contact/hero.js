import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'

const ContactHeroCon = styled.div`
  height: 400px;
  width: 90vw;
  padding: 250px 5vw 0;
  h2 {
    color: var(--dark-blue);
    font-weight: normal;
    margin: 0;
    font-size: 8vw;
    line-height: 1;
    text-align: left;
    width: calc(100vw - 16vw);

    &.desk {
      display: none;
    }
  }
  p {
    color: var(--light-blue);
    font-size: 50px;
    line-height: 60px;

    &.desk {
      display: none;
    }
  }

  ${media.laptop`
    /* height: 95vh; */
    min-height: 550px;
    height: 50vh;
    padding: var(--gutter);
    display: flex;
    align-items: center;

    h2 {
      color: var(--light-blue);
      font-weight: normal;
      font-size: 95px;
      line-height: 95px;
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
  `}
`

function ContactHero() {
  let line1 = useRef(null);

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

  return (
    <ContactHeroCon>
      <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line1 = el)} className='line'>
          Contact Us
        </div>
        </div>
      </h2>
      <p className="blurbText mob">
        Contact Us
      </p>
    </ContactHeroCon>
  );
}
export default ContactHero;