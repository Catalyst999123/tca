import React, { useRef } from "react"
import styled from 'styled-components'
import { gsap } from "gsap"

import ContactImg from '../../images/contactimg.jpg'
import Fb from '../../images/social/fb.svg'
import Li from '../../images/social/li.svg'
import Fb2 from '../../images/social/hoverfb.svg'
import Li2 from '../../images/social/hoverli.svg'
import media from "../../styles/media"
import { Reveal, Tween } from "react-gsap"

const DetailsCon = styled.div`
  padding: 50px 5vw 100px;
  display: flex;
  flex-direction: column-reverse;
  p {
    color: #909090;
    width: auto;
    &.send {
      font-size: 30px;
      line-height: 36px;
      color: var(--dark-yellow);
    }
  }
    img {
      max-width: 100%;
      height: 350px;
      object-fit: cover;
    }
  .contactDetails {
    display: block;
    p {
      margin-bottom: 15px;
    }
    a, .textDesc {
      color: var(--dark-blue);
      text-decoration: none;
      font-size: 28px;
      line-height: 34px;
      margin: 30px 0;
      width: fit-content;
      &.address {
        margin: 60px 0;
      }
      &.lined {
        border-bottom: 2px solid white;
      }
    }
    .social {
      display: flex;
      margin-left: 5vw;

      img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }
    }
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
      padding: 20px;
      font-size: 40px;
      margin-left: -40px;
      color: var(--light-green);
    }

  ${media.laptop`
    padding: 0 16vw 100px;
    margin-top: -80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      max-width: 30vw;
      height: 600px;
      margin-left: 5vw;
    }
    p {
      width: 400px;
      &.send {
        font-size: 40px;
        line-height: 48px;
        /* color: #909090; */
      }
    }
    .contactDetails {
      max-width: 40vw;
      height: 400px;
      a, .textDesc {
        margin: 0;
        font-size: 25px;
        line-height: 30px;
        text-decoration: none;
      &.address {
        margin: 0px 0;
      }
      }
      .social {
        width: fit-content;
        margin: 0;
        display: flex;

        a {
          width: 40px;
          height: 40px;
          padding: 0;
          background: transparent;
          transition: all .3s linear;
          display: block;
          margin-right: 20px;

          &.li {
            background: url(${Li});
            background-size: cover;

            &:hover {
              background: url(${Li2});
              background-size: cover;
            }
          }

          &.fb {
            background: url(${Fb});
            background-size: cover;

            &:hover {
              background: url(${Fb2});
              background-size: cover;
            }
          }
        }

        img {
          margin-right: 0;
          width: 50px;
        }
      }
    }
  `}
`

function Details() {

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
    <>
    <DetailsCon>
      <div className="contactDetails">
        <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
        <p className="smallHeadUpper black">Address</p>
        <p className="textDesc">A fully remote agency</p>
       </Tween></Reveal>
        <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
        <p className="smallHeadUpper black">Email</p>
        <a href="mailto:hello@thecatalyst.africa">hello@thecatalyst.africa</a>
        </Tween></Reveal>
        <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
        <p className="smallHeadUpper black">Follow us</p>
        <div className="social">
          {/* <MagneticButton
            className="button-1"
            scale={1.5}
            tollerance={.8}
            speed={0.5}
            borderRadius='30px'
          > */}
            <a className="socialimg fb" href="https://www.facebook.com/TheCatalystAfrica/" target="_blank" rel="noreferrer"></a>
          {/* </MagneticButton>
          <MagneticButton
            className="button-1"
            scale={1.5}
            tollerance={.8}
            speed={0.5}
            borderRadius='30px'
          > */}
            <a className="socialimg li" href="https://www.linkedin.com/company/catalyst-africa/" target="_blank" rel="noreferrer"></a>
          {/* </MagneticButton> */}
        </div>
        {/* <p className="smallHeadUpper black">Phone</p>
        <a href="tel:+27110655000" className="">+27 (0) 11 065 5000</a> */}
        </Tween></Reveal>
      </div>
      <img src={ContactImg} alt="contact" />
    </DetailsCon>
    </>
  );
}
export default Details;