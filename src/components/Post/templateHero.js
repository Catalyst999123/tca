import React, { useEffect } from "react"
import styled from 'styled-components'
import media from "../../styles/media";

const TemplateHeroCon = styled.div`
  height: 600px;
  width: 100vw;

  .date {
    position: absolute;
    top: 130px;
    left: 20px;
    color: var(--dark-blue);
  }
  .author {
    position: absolute;
    top: 430px;
    left: 20px;
    color: var(--dark-blue);
    text-transform: uppercase;
  }
  .title {
    width: 90vw;
    position: absolute;
    left: 20px;
    top: 150px;
    font-size: 44px;
    line-height: 44px;
    color: var(--dark-blue);
  }

  ${media.laptop`
    min-height: 500px;
    height: 50vh;

    .date {
      position: absolute;
      top: 360px;
      left: 50vw;
      color: white;
      text-transform: uppercase;
      letter-spacing: normal;
    }
    .author {
      position: absolute;
      top: 360px;
      left: 16vw;
      color: white;
      letter-spacing: normal;
    }

    .title {
      color: var(--dark-blue);
      width: 40vw;
      left: 16vw;
      position: absolute;
      top: 150px;
      font-size: 40px;
      line-height: 48px;
    }
  `}
`

function TemplateHero(info) {
  
  document.body.scrollTop = 0;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  var day
  var longMonth
  var year

  if(info && info.info && info.info.data) {
    day = info.info.data.date[0].text.substring(0, 2)
    longMonth = months[parseInt(info.info.data.date[0].text.substring(3, 5))]
    year = info.info.data.date[0].text.substring(6, 10)
  }

  return (
    <TemplateHeroCon>
      <p className="date subHeading">{day} {longMonth} {year}</p>
      <p className="title blurbText">{info.info.data.title[0].text}</p>
      <p className="author subHeading">{info.info.data.author[0].text}</p>
    </TemplateHeroCon>
  );
}
export default TemplateHero;