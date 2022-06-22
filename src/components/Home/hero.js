import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'
import { NavLink } from 'react-router-dom'

import BrandMark from '../../images/greenbrandmark.svg'

const HomeHeroCon = styled.div`
  height: 100vh;
  background: var(--dark-green);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw;
  p {
    color: var(--light-green);
    font-size: 14vw;
    line-height: .8;
    margin: 0;

    &.desk {
      display: none;
    }
  }

  a {
    text-decoration: none !important;
  }

  .explore {
    margin-top: -10px;
    width: fit-content;
    .exploreText {
      padding-left: 0px;
      margin: 0;
      font-size: 20px;
      line-height: 20px;
        color: white;
    }

    .circ {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content:center;
      transition: all .3s linear;
      background: transparent;
      border: 2px solid var(--light-green);
      width: 116px;
      height: 116px;
    }

    /* &:hover {
      .circ {
        background: var(--light-green);
      }
    } */
  }

  .brandmark {
    height: 250px;
    position: absolute;
    bottom: -35%;
    right: 0;
  }

  .magnetic-button {
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
    position: relative;
    z-index: 1;
    touch-action: none;
    
    span {
      display: inline-block;
    }
    
    &--hover {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .button-1 {
    padding: 40px;
    font-size: 40px;
    margin-left: -40px;
    color: white;
  }

  .bodText {
    color: var(--light-green);
    font-size: 20px;
    line-height: 28px;
    margin-top: 30px;
  }
  
  ${media.laptop`
    min-height: 700px;
    height: 100vh;
    padding: 0 8vw;

    .line {
      font-size: 100px;
      line-height: 80px;
    }
    
    p {
      &.mob {
        display: none;
      }
      &.desk {
        display: block;
        font-family: 'nimbus-sans';
      }
      .line-wrap {
        overflow: hidden;
        height: 90px;
      }
    }

    .brandmark {
      height: 350px;
      position: absolute;
      right: 0;
      top: 30vh;
    }

    .bodText {
      font-size: 20px;
      line-height: 28px;
      max-width: 500px;
      margin: 20px 0;
    }
  `}

  ${media.laptopL`

    /* .line {
      font-size: 95px;
      line-height: 80px;
    } */

    .explore {
      margin-top: -10px;
      position: absolute;
      bottom: 10vh;
      width: fit-content;
      .exploreText {
        transition: all .3s linear;
        padding-left: 0px;
        margin: 0;
        font-size: 20px;
        line-height: 20px;
        color: white;
        z-index: 3;
      }

      .circ {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content:center;
        transition: all .3s linear;
        background: transparent;
        border: 2px solid var(--light-green);
        width: 116px;
        height: 116px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--light-green);
          transition: .5s;
          border-radius: 45%;
        }
      }

      &:hover {
        .circ {
         &:before {
          top: 0;
        }
          width: 126px;
          height: 126px;
        }

        .exploreText {

        font-size: 16px;
        line-height: 16px;
        }
      }
    }
    
    p {
      &.mob {
        display: none;
      }
      &.desk {
        display: block;
        margin-top: 100px;
      }
      .line-wrap {
        overflow: hidden;
        /* height: 95px; */
      }
    }

    .bodText {

      margin-bottom: 20vh;
    }
  `}
`

function HomeHero() {
  // let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  // let line4 = useRef(null);

  useEffect(() => {
    gsap.from([line2, line3], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 100,
      stagger: {
        amount: 0.15
      }
    });
  }, [line2, line3]);

  const MagneticButton = ({
    children,
    className,
    speed = 1,
    tollerance = 0.8,
    scale = 1.2,
    debug = false,
    borderRadius = 0,
    ...props
  }) => {
    const $root = useRef()
    const $item = useRef()
    const $hover = useRef()
    const rootBound = useRef()
    const itemBound = useRef()
    const diffBound = useRef({ x: 0, y: 0 })

    const handleMouseEnter = () => {
      gsap.killTweensOf($item.current)
      gsap.set($hover.current, {
        scale: scale,
        borderRadius,
        background: debug ? 'rgba(0, 125, 255, .4)' : 'transparent',
      })

      rootBound.current = $root.current.getBoundingClientRect()
      itemBound.current = $item.current.getBoundingClientRect()
      diffBound.current.x = (rootBound.current.width * scale - rootBound.current.width) / 2
      diffBound.current.y = (rootBound.current.height * scale - rootBound.current.height) / 2
    }

    const handleMouseLeave = () => {
      gsap.killTweensOf($item.current)
      gsap.to($item.current, {
        x: 0,
        y: 0,
        ease: 'elastic.out(1.1, .4)',
        duration: 1.2
      })
      gsap.set($hover.current, {
        scale: 1
      })
    }

    const handleMouseMove = (e) => {
      const x = e.clientX || e.touches[0].clientX
      const y = e.clientY || e.touches[0].clientY

      const maxX = (rootBound.current.width - itemBound.current.width) / 2 * tollerance
      const maxY = (rootBound.current.height - itemBound.current.height) / 2 * tollerance

      const newX = gsap.utils.mapRange(
        0,
        rootBound.current.width * scale,
        -maxX,
        maxX,
        x - rootBound.current.x + diffBound.current.x
      )

      const newY = gsap.utils.mapRange(
        0,
        rootBound.current.height * scale,
        -maxY,
        maxY,
        y - rootBound.current.y + diffBound.current.y
      )

      gsap.killTweensOf($item.current)
      gsap.to($item.current, {
        x: newX,
        y: newY,
        ease: 'power3.out',
        duration: speed
      })
    }

    return (
      <button
        ref={$root}
        className={`magnetic-button ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onTouchStart={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleMouseLeave}
        {...props}
      >
        <span
          ref={$item}
          className="magnetic-button--item"
        >
          {children}
        </span>
        <span
          ref={$hover}
          className="magnetic-button--hover"
        />
      </button>
    )
  }

  return (
    <HomeHeroCon>
      {/* <h2 className="largeText desk">
        <div className='line-wrap'>
        <div ref={el => (line1 = el)} className='line'>
          About
        </div>
        </div>
      </h2>
      <h2 className="largeText mob">
          About
      </h2> */}
      <p className="desk">
        <div className='line-wrap'>
          <div ref={el => (line2 = el)} className='line'>
            Delivering results that
          </div>
        </div>
        <div className='line-wrap'>
          <div ref={el => (line3 = el)} className='line'>
            spark connections
          </div>
        </div>
        {/* <div className='line-wrap'>
        <div ref={el => (line4 = el)} className='line'>
          
        </div>
      </div> */}
      </p>

      <p className="blurbText mob">
        Delivering results that spark connections
      </p>

      <p className="bodText">
        The Catalyst Africa is the B2B marketing agency of choice, known for our impactful results and solutionist thinking. A multi-award-winning agency working with a diverse customer set, across both B2B and B2C.
      </p>

      <div className="explore">

        <MagneticButton
          className="button-1"
          scale={1.5}
          tollerance={.8}
          speed={0.5}
          borderRadius='30px'
        >
          <NavLink
            to={{
              pathname: `/work`,
            }}
          >
            <div className="circ">
              <p className="exploreText">
                Explore
              </p>
            </div>
          </NavLink>
        </MagneticButton>
      </div>

      <img src={BrandMark} className="brandmark" alt="TCA" />
    </HomeHeroCon >
  );
}
export default HomeHero;