import React, { useState, useEffect, useRef } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'
import gsap from 'gsap'

import media from "../../styles/media"
import { Reveal, Tween } from "react-gsap"

const settings = {
  threshold: 80,
  ratio: 15,
  max: 100,
  scale: 1.2,
  ease: 0.14,
  label: 'Explore'
}

const CampaignsCon = styled.div`
  max-width: 100vw;
  padding: 0 5vw;
  a {
    text-decoration: none;
  }

  .selectedText {
    text-align:center;
    font-size: 12px;
    line-height: 14px;
  }

  .case {
      margin-bottom: 50px;
      .top {
        padding: 0px;
        overflow: hidden;
        height: 230px;
        position: relative;
        width: 100%;
        img {
          object-fit: cover;
          height: 230px;
          transition: all .75s linear;
          width: 100%;
        }
        .cover {
          height: 230px;
          background: var(--dark-blue);
          opacity: .5;
          width: 100%;
          position: absolute;
          top: 0;
        }
      }
      .bottom {
        height: 180px;
        margin-bottom: 0;
        max-width: 90vw;
        padding: 0px 2vw;
        position: absolute;
        margin-top: -50%;
        color: white;
        h2 {
          font-size: 24px;
          line-height: 30px;
          font-weight: normal;
          margin-bottom: 0;
          color: white;
        }
        p {
          font-size: 16px;
          line-height: 19px;
          margin: 10px 0 0;
          color: white;
        }

        .circle {
          margin-left: 30px;
          width: 56px;
          height: 56px;
          border: 3px solid var(--light-green);
          border-radius: 50%;
        }

        .circ {
          border-radius: 50%;
          margin-top: -30px;
          transition: all .3s linear;
          background: transparent;
          border: 2px solid var(--light-green);
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content:center;

          p {
            margin: 0;
            font-size: 12px;
            line-height: 12px;
          }
        }
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
    padding: 10px;
    margin-left: -10px;
    color: var(--light-green);
  }
    
  ${media.laptop`
    padding:var(--gutter);
    position: relative;
    display: grid;
    grid-template-columns: .01fr 1fr;

    .selectedText {
      height: auto;
      position: relative;
      color: black;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      width: 40px;
      margin: 350px 0 250px;
      p {
        position: sticky;
        left: 0;
        white-space: nowrap;
        top: 400px;
        letter-spacing: initial;
        transform: rotateZ(-90deg);
      }
    }

    .cases {
      display: grid;
      grid-row-gap: 100px;
    }

    .case {
      margin-bottom: 0;
      .top {
        padding: 0px;
        overflow: hidden;
        height: 600px;
        width: 100%;
        position: relative;
        img {
          object-fit: cover;
          height: 600px;
          width: 100%;
          transition: all .75s linear;
        }
        .cover {
          height: 600px;
          background: var(--dark-blue);
          opacity: .5;
          width: 100%;
          position: absolute;
          top: 0;
        }
      }
      .bottom {
        height: 150px;
        margin-bottom: 0;
        padding: 0px 80px;
        position: absolute;
        margin-top: -450px;
        color: white;
        h2 {
          font-size: 40px;
          line-height: 40px;
          font-weight: normal;
          margin-bottom: 0;
          color: white;
        }
        p {
          font-size: 25px;
          line-height: 30px;
          margin: 20px 0 0;
          color: white;
        }

        /* .explore {
          display: flex;
          align-items: center;
          margin-top: 0px;
          font-size: 20px;
          line-height: 24px; */
          .circle {
            margin-left: 30px;
            width: 116px;
            height: 116px;
            border: 3px solid var(--light-green);
            border-radius: 50%;
          }

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
        /* } */
      }

      &:hover {
        .top {
          img {
            transform: scale(1.125);
          }
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
      padding: 40px;
      margin-left: -40px;
      color: var(--light-green);
    }
  `}
`

const Campaigns = () => {
  const [doc, setDocData] = useState(null)

  useEffect(() => {
    console.log('ran');
    if (doc === null || doc !== null && doc.length < 1) {
      setDocData(JSON.parse(localStorage.getItem('caseStudies')))
    }
  }, [doc])

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

  const renderWorks = () => {
    return doc.slice(0, 3).map((work) => {
      return (
        <div className="case" key={work.id}>
          <Link
            to={{
              pathname: `/work/${work.slugs[0]}`,
              state: work
            }}
            onClick={() => localStorage.setItem('casestudy', JSON.stringify(work))}
            onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(work))}
          >
            <div className="top">
              <img src={work.data.thumbnail.url} alt="case-study" />
              <div className="cover" />
            </div>
            <div className="bottom">
              <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                <h2>{work.data.title[0].text}</h2>
              </Tween></Reveal>

              <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                <p>{work.data.services[0].text}</p>
              </Tween></Reveal>

              <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                <MagneticButton
                  className="button-1"
                  scale={1.5}
                  tollerance={.8}
                  speed={0.5}
                  borderRadius='30px'
                >
                  <div className="circ">
                    <p className="exploreText">
                      Explore
                    </p>
                  </div>
                </MagneticButton>
              </Tween></Reveal>
            </div>
          </Link>
        </div>
      )
    })
  }

  return (
    <>
      <CampaignsCon>
        <div className="selectedText"><p>SELECTED PROJECTS</p></div>
        <div className="cases">
          {doc !== null && doc.length > 0 && (
            renderWorks()
          )}
        </div>
      </CampaignsCon>
    </>
  );
}
export default Campaigns;