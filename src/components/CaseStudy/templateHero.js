import React, { useEffect } from "react"
import styled from 'styled-components'
import media from "../../styles/media";

const TemplateHeroCon = styled.div`
  height: 600px;
  width: 100vw;
 

    div{
 position: absolute;
  top: 120px;
    left: 20px;
    }

  .link {
   
   
    color: var(--dark-red);
    text-transform: uppercase;
    margin: 15px 0;
  }
  .title {
    color: white;
    width: 80vw;
 
    font-size: 40px;
    line-height: 44px;
  }

  .blurb {
    color: var(--dark-blue);
    width: calc(90vw - 40px);

    font-size: 24px;
    line-height: 26px;
  }

  ${media.laptop`
    min-height: 500px;
    width: 68vw;
    height: 50vh;
    div{
      left: 16vw;
    }

    /* .link {
      position: absolute;
      top: 70vh;
      left: 16vw;
    } */

    .title {
      color: white;
      width: 40vw;
      left: 16vw;
      /* position: absolute; */
      max-width: 68vw;
      /* top: 150px; */
      font-size: 40px;
      line-height: 48px;
    }

    .blurb {
      color: var(--dark-blue);
      width: 40vw;
    /*   position: absolute;
      left: 16vw;
      top: 280px; */
      font-size: 30px;
      line-height: 30px;
    }
  `}
`

function TemplateHero(info) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <TemplateHeroCon>
      <div>
        <p className="title blurbText">{info.info.data.title[0].text}</p>
        <p className="blurb blurbText">{info.info.data.description[0].text}</p>
      </div>

    </TemplateHeroCon>
  );
}
export default TemplateHero;