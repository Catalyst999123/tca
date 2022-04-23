import React from "react"
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

import GalleryImg1 from '../../images/gallery1.jpg'
import GalleryImg2 from '../../images/gallery2.jpg'
import media from "../../styles/media"
import Footer from "../footer"

const Gallery2Con = styled.div`
  padding: 0vh 20px 200px;
  background: var(--light-green);
  figure {
    margin: 0;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .img2 {
    grid-column: 2/3;
    grid-row: 2/4;
    margin-top: 50px;
    img {
      min-height: 150px;
    }
  }

  ${media.laptop`
    padding: 0vh 16vw 150px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 0.2fr 1fr 1fr;
    grid-column-gap: 100px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .img1 {
      grid-column: 1/2;
      grid-row: 1/3;
    }

    .img2 {
      grid-column: 2/3;
      grid-row: 2/4;
      margin: 0;
      img {
        min-height: 550px;
      }
    }
  `}
`

function Gallery2() {
  return (
    <>
    <Gallery2Con>
      <Parallax className="img1" y={[-10, 30]} tagOuter="figure">
        <img src={GalleryImg1} alt="statue" className="" />
      </Parallax>
      <Parallax className="img2" y={[20, 0]} tagOuter="figure">
        <img src={GalleryImg2} alt="statue" className="" />
      </Parallax>
    </Gallery2Con>
    </>
  );
}
export default Gallery2;