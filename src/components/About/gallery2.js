import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import media from '../../styles/media'
import { useInView } from 'react-hook-inview'

import Divider from '../../images/about2.jpg'
import Footer from "../footer"


const Gallery2Con = styled.div`
  padding: 0 20px 100px;
  background: var(--light-red);
  height: 250px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${media.laptop`
    padding: 0vh 16vw 200px;
    height: 700px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .overlay {
      margin-top: -150px;
      height: 100%;
      width: 100%;
      max-height: 700px;
      object-fit: cover;
      margin: 0;
      background: var(--dark-red);
      grid-row: 1;
      grid-column: 1;
      z-index: 9;
      transition: all 1s linear;

      &.visible {
        height: 0;
      }
    }

    img {
      height: 100%;
      width: 100%;
      max-height: 700px;
      object-fit: cover;
      grid-row: 1;
      grid-column: 1;
    }
  `}
`

function Gallery2() {
  const [shown, setShown] = useState(false)

  const [ref, isVisible] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if(isVisible) {
      setShown(true)
    }
  }, [isVisible])

  return (
    <>
    <Gallery2Con>
      <div ref={ref} className={shown ? 'overlay visible' : 'overlay'}></div>
      <img src={Divider} alt="divider" />
    </Gallery2Con>
    </>
  );
}
export default Gallery2;