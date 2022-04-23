import React, { useState } from "react"
import styled from 'styled-components'
import media from "../../styles/media"
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import Modal from 'react-modal'

import ArrowLeft from '../../images/blueright.svg'
import ArrowRight from '../../images/blueleft.svg'

const WorkCarouselCon = styled.div`
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
        img  {
          width:100%;
          height: 205px;
          object-fit: cover;
        }
        iframe {
          width: 100%;
          height: 205px;
        }
      }
    }
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
    margin: 50px 0 100px;
    width: 68vw;

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
      margin-bottom: 100px;
    }
          
    }
  `}
`

function WorkCarousel(info) {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  function openModal(imageUrl) {
    setIsOpen(true);
    setModalImg(imageUrl)
  }

  function closeModal(){
    setIsOpen(false);
  }

  SwiperCore.use([Navigation]);

  return (
    <WorkCarouselCon>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button className="modalButton" onClick={closeModal}>&times;</button>
        <img className="modalImage" src={modalImg} alt="enlarged" />
      </Modal>

      <div className="desk">
        {info.info.data.galleryimage1.url  && (
          <img src={info.info.data.galleryimage1.url} alt="gallery" />
        )}
        {info.info.data.galleryimage2.url  && (
          <img src={info.info.data.galleryimage2.url} alt="gallery" />
        )}
        {info.info.data.galleryimage3.url  && (
          <img src={info.info.data.galleryimage3.url} alt="gallery" />
        )}
        {info.info.data.galleryimage4.url  && (
          <img src={info.info.data.galleryimage4.url} alt="gallery" />
        )}
        {info.info.data.galleryimage5.url  && (
          <img src={info.info.data.galleryimage5.url} alt="gallery" />
        )}
        {info.info.data.galleryimage6.url  && (
          <img src={info.info.data.galleryimage6.url} alt="gallery" />
        )}
        {info.info.data.galleryimage7.url  && (
          <img src={info.info.data.galleryimage7.url} alt="gallery" />
        )}
        {info.info.data.galleryimage8.url  && (
          <img src={info.info.data.galleryimage8.url} alt="gallery" />
        )}
        {info.info.data.galleryimage9.url  && (
          <img src={info.info.data.galleryimage9.url} alt="gallery" />
        )}
        {info.info.data.galleryimage10.url  && (
          <img src={info.info.data.galleryimage10.url} alt="gallery" />
        )}
        </div>
        <div className="mob">
       <Swiper
          slidesPerView={1}
          loop={false}
          navigation
        > 
          {info.info.data.galleryimage1.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage1.url)}>
                <img src={info.info.data.galleryimage1.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage2.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage2.url)}>
                <img src={info.info.data.galleryimage2.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage3.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage3.url)}>
                <img src={info.info.data.galleryimage3.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage4.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage4.url)}>
                <img src={info.info.data.galleryimage4.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage5.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage5.url)}>
                <img src={info.info.data.galleryimage5.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage6.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage6.url)}>
                <img src={info.info.data.galleryimage6.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage7.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage7.url)}>
                <img src={info.info.data.galleryimage7.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage8.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage8.url)}>
                <img src={info.info.data.galleryimage8.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage9.url  && (
            <SwiperSlide>
              <button onClick={() => openModal(info.info.data.galleryimage9.url)}>
                <img src={info.info.data.galleryimage9.url} alt="gallery" />
              </button>
            </SwiperSlide>
          )}
          {info.info.data.galleryimage10.url  && (
            <SwiperSlide>
            <button onClick={() => openModal(info.info.data.galleryimage10.url)}>
              <img src={info.info.data.galleryimage10.url} alt="gallery" />
            </button>
            </SwiperSlide>
          )}
        </Swiper>
        </div>
    </WorkCarouselCon>
  );
}
export default WorkCarousel;