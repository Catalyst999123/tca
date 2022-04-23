import React, { useEffect, useRef } from "react"
import styled from 'styled-components'
import { gsap } from "gsap";
import media from "../../styles/media";

const ContactHeroCon = styled.div`
  height: 550px;
  width: 100vw;
  h2 {
    color: var(--dark-yellow);
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
      color: var(--dark-yellow);
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

function ContactHero() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

  useEffect(() => {
    gsap.from([line2, line3, line4], 0.8, {
      delay: 3,
      ease: "power3.out",
      y: 43,
      stagger: {
        amount: 0.15
      }
    });
  }, [line2, line3, line4])

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
    <ContactHeroCon>
      <h2 className="largeText desk">
        <div className='line-wrap'>
          <div ref={el => (line1 = el)} className='line'>
          Contact
          </div>
        </div>
      </h2>
      <h2 className="largeText mob">
        Contact
      </h2>
      <p className="blurbText desk">
        <div className='line-wrap'>
          <div ref={el => (line2 = el)} className='line'>
            We're ready to accelerate
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line3 = el)} className='line'>
            your business and create
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line4 = el)} className='line'>
            Catalyst magic.
          </div>
        </div>
      </p>
      <p className="blurbText mob">
        We're ready to accelerate your business and create Catalyst magic.
      </p>
    </ContactHeroCon>
  );
}
export default ContactHero;
