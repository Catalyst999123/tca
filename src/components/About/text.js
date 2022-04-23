import React from "react"
import styled from 'styled-components'
import media from "../../styles/media"

const TextCon = styled.div`
  width: 100vw;
  height: 100px;
  min-height: 100px;
  padding: 70px 0 0;
  align-items: center;
  background: var(--light-red);

  .marquee {
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 200px;
    font-weight: 300;
    font-size: 40px;
    line-height: 40px;
    color: var(--dark-red);
    overflow-x: hidden;
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 50s linear infinite;
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }


  ${media.laptop`
    height: 200px;
    padding: 150px 0 0;
    .marquee {
      font-size: 90px;
      line-height: 80px;
    }
  `}
`

const Text = () => {

  return (
    <TextCon>
      <div class="marquee">
        <div class="track">
          <div class="content">&nbsp;Filled with passion, sparked by results. Filled with passion, sparked by results. Filled with passion, sparked by results. Filled with passion, sparked by results. Filled with passion, sparked by results. Filled with passion, sparked by results. Filled with passion, sparked by results.</div>
        </div>
      </div>
    </TextCon>
  );
}
export default Text;