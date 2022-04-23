import React from "react"
import styled from 'styled-components'
import media from '../../styles/media'

const TemplateThumbnailCon = styled.div`
  margin: 0;
  height: 250px;
  img {
    height: 100%;
    width: 90%;
    margin: -70px 5% 0;
    object-fit: cover;
  }

  ${media.laptop`
    margin: -100px 0 0;
    height: 500px;
    width: 68vw;
    img {
      height: 100%;
      max-height: 500px;
      width: 100%;
      object-fit: cover;
      margin: 0;
    }
  `}
`

function TemplateThumbnail(info) {
  return (
    <TemplateThumbnailCon>
      <img src={info.info.data.thumbnail.url} alt="divider" />
    </TemplateThumbnailCon>
  );
}
export default TemplateThumbnail;