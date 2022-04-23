import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import media from '../../styles/media'
import { useInView } from 'react-hook-inview'

import Divider from '../../images/about.jpeg'

const GalleryCon = styled.div`
  margin: 0;
  img {
    height: 100%;
    width: 90%;
    margin: -130px 5% 0;
    object-fit: cover;
  }

  ${media.laptop`
    margin: -10vh 16vw 0;
    height: 600px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .overlay {
      height: 100%;
      width: 100%;
      max-height: 600px;
      object-fit: cover;
      margin: 0;
      background: var(--light-red);
      grid-row: 1;
      grid-column: 1;
      transition: all 1s linear;

      &.visible {
        height: 0;
      }
    }
    img {
      height: 100%;
      width: 100%;
      max-height: 600px;
      object-fit: cover;
      margin: 0;
      grid-row: 1;
      grid-column: 1;
      z-index: -1;
    }
  `}
`

function Gallery() {
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
    <GalleryCon>
      <div ref={ref} className={shown ? 'overlay visible' : 'overlay'}></div>
      <img src={Divider} alt="divider" />
    </GalleryCon>
  );
}
export default Gallery;