import React, { useState } from "react"
import styled from 'styled-components'
import media from "../../styles/media"

import ArrowLeft from '../../images/blueright.svg'
import ArrowRight from '../../images/blueleft.svg'

const BlogCarouselCon = styled.div`
  margin-top: 50px;

  .showing {
    display: block;
  }
  .hidden {
    display: none;
  }

  .swiper-container {
    overflow: visible;
    .swiper-button-prev {
      position: absolute;
      margin-top: 100px;
      margin-left: 0vw;
      color: var(--dark-blue);
      background-image:  url(${ArrowLeft});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .swiper-button-next {
      position: absolute;
      margin-top: 100px;
      color: var(--dark-blue);
      background-image:  url(${ArrowRight});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .swiper-button-next::after {
      display: none;
    }
    .swiper-button-prev::after {
      display: none;
    }
    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        width: 100%;
        button {
          width: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        iframe {
          width: 100%;
          height: 205px;
        }
      }
    }
  }
        img  {
          width:100%;
          height: 205px;
          object-fit: cover;
        }

  .desk {
    display: none;
  }

  .mob {
    overflow: hidden;
    margin: 0 20px 150px 20px;
    .swiper-container {
      height:270px;
    }
  }

  ${media.laptop`
    margin: 30px 0px 0px;

    .desk {
      display: block;
    }
    .mob{
      display: none;
    }
   
    img  {
      object-fit: cover;
      width: 100%;
      min-height: 600px;
      height: auto;
      margin-bottom: 50px;
    }
          
    }
  `}
`

function BlogCarousel(info) {

  return (
    <BlogCarouselCon>
      {info.info.data.thumbnail.url  && (
        <img src={info.info.data.thumbnail.url} alt="gallery" />
      )}
    </BlogCarouselCon>
  );
}
export default BlogCarousel;