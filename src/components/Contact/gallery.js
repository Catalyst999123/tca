import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import media from '../../styles/media'
import { useInView } from 'react-hook-inview'

import Divider from '../../images/contact.jpg'

const GalleryCon = styled.div`
  margin: 0;
  img {
    height: 100%;
    width: 90%;
    margin: 0 5% 0;
    object-fit: cover;
  }

  ${media.laptop`
    margin: 0 120px 0;
    height: 800px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .overlay {
      height: 100%;
      width: 100%;
      max-height: 800px;
      object-fit: cover;
      margin: 0;
      background: var(--dark-blue);
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
      max-height: 800px;
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