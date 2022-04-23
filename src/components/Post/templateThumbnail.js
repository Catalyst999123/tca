import React from "react"
import styled from 'styled-components'
import media from '../../styles/media'

const TemplateThumbnailCon = styled.div`
  margin: 0;
  img {
    height: 100%;
    width: 90%;
    margin: -150px 5% 0;
    object-fit: cover;
  }

  ${media.laptop`
    margin: -10vh 200px 200px;
    height: 800px;
    img {
      height: 100%;
      max-height: 800px;
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